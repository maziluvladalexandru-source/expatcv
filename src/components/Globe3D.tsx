"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

// City positions: [lat, lon] in degrees
const CITIES: { name: string; lat: number; lon: number; highlight?: boolean }[] = [
  { name: "Amsterdam", lat: 52.37, lon: 4.9, highlight: true },
  { name: "London", lat: 51.51, lon: -0.13 },
  { name: "Berlin", lat: 52.52, lon: 13.41 },
  { name: "New York", lat: 40.71, lon: -74.01 },
  { name: "Sydney", lat: -33.87, lon: 151.21 },
];

function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export default function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const RADIUS = 1;
    const CYAN = new THREE.Color(0x38bdf8);
    const CYAN_DIM = new THREE.Color(0x38bdf8);

    // --- Wireframe sphere (lat/lon grid) ---
    // Longitude lines (meridians)
    const lonCount = 24;
    for (let i = 0; i < lonCount; i++) {
      const angle = (i / lonCount) * Math.PI * 2;
      const curve = new THREE.EllipseCurve(0, 0, RADIUS, RADIUS, 0, Math.PI * 2, false, 0);
      const points2d = curve.getPoints(80);
      const points3d = points2d.map(
        (p) =>
          new THREE.Vector3(
            Math.cos(angle) * p.x,
            p.y,
            Math.sin(angle) * p.x
          )
      );
      const geo = new THREE.BufferGeometry().setFromPoints(points3d);
      const mat = new THREE.LineBasicMaterial({
        color: CYAN_DIM,
        transparent: true,
        opacity: 0.12,
      });
      globeGroup.add(new THREE.LineLoop(geo, mat));
    }

    // Latitude lines (parallels)
    const latCount = 12;
    for (let i = 1; i < latCount; i++) {
      const lat = (i / latCount) * Math.PI - Math.PI / 2;
      const r = Math.cos(lat) * RADIUS;
      const y = Math.sin(lat) * RADIUS;
      const points: THREE.Vector3[] = [];
      const segments = 80;
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * r, y, Math.sin(angle) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const isEquator = i === latCount / 2;
      const mat = new THREE.LineBasicMaterial({
        color: CYAN_DIM,
        transparent: true,
        opacity: isEquator ? 0.18 : 0.1,
      });
      globeGroup.add(new THREE.LineLoop(geo, mat));
    }

    // --- Outer glow ring (atmosphere) ---
    const glowRingGeo = new THREE.RingGeometry(RADIUS * 1.0, RADIUS * 1.15, 128);
    const glowRingMat = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const glowRing = new THREE.Mesh(glowRingGeo, glowRingMat);
    glowRing.lookAt(camera.position);
    scene.add(glowRing);

    // Second glow layer - wider, dimmer
    const glowRingGeo2 = new THREE.RingGeometry(RADIUS * 1.1, RADIUS * 1.3, 128);
    const glowRingMat2 = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.035,
      side: THREE.DoubleSide,
    });
    const glowRing2 = new THREE.Mesh(glowRingGeo2, glowRingMat2);
    glowRing2.lookAt(camera.position);
    scene.add(glowRing2);

    // Outer circle stroke
    const outlinePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      outlinePoints.push(new THREE.Vector3(Math.cos(a) * RADIUS, Math.sin(a) * RADIUS, 0));
    }
    const outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePoints);
    const outlineMat = new THREE.LineBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.25,
    });
    const outlineLine = new THREE.LineLoop(outlineGeo, outlineMat);
    outlineLine.lookAt(camera.position);
    scene.add(outlineLine);

    // --- City dots ---
    const cityMeshes: { mesh: THREE.Mesh; highlight: boolean; glowMesh?: THREE.Mesh }[] = [];

    CITIES.forEach((city) => {
      const pos = latLonToVec3(city.lat, city.lon, RADIUS);
      const dotSize = city.highlight ? 0.025 : 0.015;
      const dotGeo = new THREE.SphereGeometry(dotSize, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: city.highlight ? 1.0 : 0.8,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      globeGroup.add(dot);

      let glowMesh: THREE.Mesh | undefined;
      if (city.highlight) {
        // Pulsing glow ring for highlighted city
        const glowGeo = new THREE.SphereGeometry(0.05, 16, 16);
        const glowMat = new THREE.MeshBasicMaterial({
          color: CYAN,
          transparent: true,
          opacity: 0.3,
        });
        glowMesh = new THREE.Mesh(glowGeo, glowMat);
        glowMesh.position.copy(pos);
        globeGroup.add(glowMesh);
      }

      cityMeshes.push({ mesh: dot, highlight: !!city.highlight, glowMesh });
    });

    // --- Animation ---
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow rotation
      globeGroup.rotation.y = elapsed * 0.15;

      // Slight tilt for aesthetics
      globeGroup.rotation.x = 0.3;

      // Pulse city dots
      cityMeshes.forEach(({ mesh, highlight, glowMesh }) => {
        const mat = mesh.material as THREE.MeshBasicMaterial;
        if (highlight) {
          mat.opacity = 0.7 + 0.3 * Math.sin(elapsed * 2.5);
          if (glowMesh) {
            const gMat = glowMesh.material as THREE.MeshBasicMaterial;
            const pulse = 0.15 + 0.2 * Math.sin(elapsed * 2.5);
            gMat.opacity = pulse;
            const s = 1 + 0.5 * Math.sin(elapsed * 2.5);
            glowMesh.scale.setScalar(s);
          }
        } else {
          mat.opacity = 0.5 + 0.3 * Math.sin(elapsed * 1.8 + mesh.position.x * 5);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize handler ---
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: 400, minWidth: 400 }}
    />
  );
}

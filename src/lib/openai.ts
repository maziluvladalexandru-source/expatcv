import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function rewriteCV(cvText: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are an expert CV consultant specializing in the Dutch and EU job market.
Rewrite the provided CV to:
- Follow Dutch/EU CV conventions (personal details, professional summary, experience, education, skills)
- Use clear, professional English suitable for international companies in the Netherlands
- Highlight transferable skills relevant to the Dutch job market
- Add a professional summary section if missing
- Format dates in DD/MM/YYYY or Month YYYY format
- Include sections for languages and certifications if applicable
- Keep it concise (max 2 pages worth of content)
- Optimize for ATS (Applicant Tracking Systems) commonly used in the Netherlands`,
      },
      {
        role: "user",
        content: `Please rewrite this CV for the Dutch/EU job market:\n\n${cvText}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 2000,
  });

  return response.choices[0].message.content || "";
}

export async function generateCoverLetter(
  cvText: string,
  jobPosting: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are an expert cover letter writer for the Dutch and EU job market.
Write a compelling cover letter that:
- Follows Dutch business letter conventions
- Addresses the specific job requirements from the posting
- Highlights relevant experience from the CV
- Shows cultural awareness of the Dutch work environment (direct communication, work-life balance, flat hierarchy)
- Is concise (max 400 words) as preferred in the Netherlands
- Includes a strong opening that references the company/role
- Ends with a confident call to action
- Uses professional but warm tone typical of Dutch business culture`,
      },
      {
        role: "user",
        content: `Write a cover letter based on this CV:\n\n${cvText}\n\nFor this job posting:\n\n${jobPosting}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1500,
  });

  return response.choices[0].message.content || "";
}

export async function optimizeLinkedInBio(
  currentBio: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a LinkedIn profile optimization expert for expats in the Netherlands/EU.
Rewrite the LinkedIn bio/summary to:
- Be optimized for LinkedIn search (keywords relevant to Dutch/EU market)
- Show the person as an international professional thriving in the Netherlands
- Highlight cross-cultural competencies and multilingual abilities
- Include relevant industry keywords for the Dutch market
- Be engaging and personable while remaining professional
- Stay within LinkedIn's 2,600 character limit for the About section
- Include a clear value proposition
- Mention openness to opportunities in the Netherlands/EU if appropriate`,
      },
      {
        role: "user",
        content: `Please optimize this LinkedIn bio for the Dutch/EU market:\n\n${currentBio}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  });

  return response.choices[0].message.content || "";
}

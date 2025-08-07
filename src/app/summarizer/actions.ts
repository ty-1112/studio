'use server';

import { summarizeDocument } from '@/ai/flows/summarize-document';

export async function getSummary(documentText: string) {
  if (!documentText || documentText.trim().length === 0) {
    return { error: 'Please enter some text to summarize.' };
  }

  try {
    const result = await summarizeDocument({ documentText });
    return { summary: result.summary };
  } catch (error) {
    console.error('Summarization Error:', error);
    return { error: 'An unexpected error occurred while generating the summary. Please try again later.' };
  }
}

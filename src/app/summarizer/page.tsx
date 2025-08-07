import { Metadata } from 'next';
import { SummarizerForm } from './summarizer-form';

export const metadata: Metadata = {
  title: 'Document Summarizer',
  description: 'Use our AI tool to quickly summarize large documents and articles related to medical entomology.',
};

export default function SummarizerPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AI Document Summarizer</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Paste any text-based document below to get a concise, AI-generated summary. Ideal for quickly grasping the key points of research papers, reports, and articles.
        </p>
      </div>
      <SummarizerForm />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { getSummary } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, FileText, Bot } from 'lucide-react';

export function SummarizerForm() {
  const [documentText, setDocumentText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSummary('');

    const result = await getSummary(documentText);

    if (result.error) {
      setError(result.error);
    } else if (result.summary) {
      setSummary(result.summary);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <FileText className="w-6 h-6" />
              Document Text
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Paste your document here..."
              value={documentText}
              onChange={(e) => setDocumentText(e.target.value)}
              rows={15}
              className="text-base"
              disabled={loading}
            />
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button type="submit" size="lg" disabled={loading || !documentText}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Summarizing...
              </>
            ) : (
              'Summarize Document'
            )}
          </Button>
        </div>
      </form>

      {error && (
        <div className="mt-8 text-center text-destructive">
            <p>{error}</p>
        </div>
      )}

      {summary && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Bot className="w-6 h-6 text-primary" />
              AI Generated Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none text-base whitespace-pre-wrap">
              {summary}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

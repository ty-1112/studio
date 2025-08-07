'use client';

import { useToast } from '@/hooks/use-toast';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ShareButton({ text = "Share" }: { text?: string }) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: `Check out this page from BugMed Labs!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
            console.error('Share failed:', err);
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link Copied!',
        description: 'The page URL has been copied to your clipboard.',
      });
    }
  };

  return (
    <Button onClick={handleShare} variant="outline">
      <Share2 className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );
}

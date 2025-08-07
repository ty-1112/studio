'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

// Although metadata can't be used in a client component, we'll keep this as a mental note. 
// A parent server component would be needed to set this. For this structure, we'll assume it's set in a layout if needed.
// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: 'Get in touch with BugMed Labs for service requests, media inquiries, or general questions.',
// };

export default function ContactPage() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setLoading(false);
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you shortly.",
        });
        
        // Here you would typically get form data and send it to an API endpoint
        // e.g. const formData = new FormData(e.currentTarget);
        // await fetch('/api/contact', { method: 'POST', body: formData });
        
        (e.target as HTMLFormElement).reset();
    }

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Have a question or a project in mind? We'd love to hear from you.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">Inquiry Form</CardTitle>
          <CardDescription>Please fill out the form below and we'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required disabled={loading} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required disabled={loading} />
              </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="inquiry-type">Inquiry Type</Label>
                <Select name="inquiryType" required disabled={loading}>
                    <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select a reason..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="service-request">Service Request</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="collaboration">Collaboration Proposal</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={6} required disabled={loading} />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore real-world examples of how BugMed Labs is making an impact in global health.',
};

const caseStudies = [
  {
    title: 'Zika Virus Outbreak Response in Brazil',
    description: 'Partnered with local health authorities to rapidly scale up Aedes aegypti surveillance and insecticide resistance monitoring, providing critical data for targeted vector control interventions.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'brazil landscape',
    link: '#',
  },
  {
    title: 'Malaria Prevention in Sub-Saharan Africa',
    description: 'Evaluated the efficacy of new long-lasting insecticidal nets (LLINs) against pyrethroid-resistant Anopheles gambiae populations, leading to updated WHO recommendations.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'africa village',
    link: '#',
  },
  {
    title: 'Lyme Disease Risk Mapping in North America',
    description: 'Conducted extensive tick surveillance and pathogen screening to develop high-resolution risk maps for Lyme disease, informing public awareness campaigns and preventative measures.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'forest north america',
    link: '#',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Case Studies</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Discover how our expertise in medical entomology has contributed to significant public health outcomes around the world.
        </p>
      </div>

      <div className="grid gap-12 max-w-5xl mx-auto">
        {caseStudies.map((study, index) => (
          <Card key={study.title} className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
             <div className={index % 2 === 0 ? 'lg:order-last' : ''}>
                <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={study.aiHint}
                />
            </div>
            <div className="p-6">
              <CardHeader>
                <CardTitle className="font-headline text-2xl mb-2">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <Button asChild variant="outline">
                  <Link href={study.link}>
                    Read Full Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

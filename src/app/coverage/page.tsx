import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Coverage',
  description: 'Explore the global reach of BugMed Labs and the regions we serve.',
};

export default function CoveragePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Global Footprint</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          BugMed Labs collaborates with partners worldwide to combat vector-borne diseases. Our expertise supports projects on every continent, adapting to local entomological challenges.
        </p>
      </div>

      <div className="rounded-lg border shadow-lg overflow-hidden">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="World map showing BugMed Labs service areas"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          data-ai-hint="world map highlights"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center space-y-4">
        <h2 className="text-3xl font-bold font-headline">Partner with Us</h2>
        <p className="text-muted-foreground text-lg">
            Whether you are a public health ministry, a research institution, or a non-governmental organization, our team is equipped to provide expert entomological services tailored to your region's specific needs. From tropical rainforests to arid savannas, we have the experience to support your mission.
        </p>
        <div className="pt-4">
            <Button asChild size="lg">
                <Link href="/contact">Request Service Information</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, TestTube, Dna, Map, Users, FlaskConical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    AI-Powered Hypothesis Generation for Drug Discovery
                  </h1>
                  <p className="max-w-[600px] text-lg md:text-xl">
                    BugMed Labs operates an advanced AI-powered hypothesis generation engine that decodes complex biological data to accelerate drug discovery. By integrating multi-modal data from unique sources, including genomics and natural bioprospecting, our platform identifies novel therapeutic pathways and de-risks development, creating a new paradigm for discovering cures.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/services">Our Platform</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Hero"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                data-ai-hint="abstract biology"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Core Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of services in medical entomology, from species identification to insecticide resistance testing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <TestTube className="w-8 h-8 text-accent" />
                  <CardTitle>Vector Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Accurate morphological and molecular identification of medically important arthropods.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Microscope className="w-8 h-8 text-accent" />
                  <CardTitle>Pathogen Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Advanced screening of vectors for a wide range of viral, bacterial, and parasitic pathogens.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <FlaskConical className="w-8 h-8 text-accent" />
                  <CardTitle>Resistance Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>WHO-standard bioassays to determine insecticide resistance profiles in vector populations.</p>
                </CardContent>
              </Card>
            </div>
             <div className="text-center mt-12">
                <Button asChild>
                    <Link href="/services">View All Services</Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Meet Our Expert Team</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team comprises leading scientists and technicians with decades of combined experience in medical entomology and public health.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild>
                <Link href="/team">View Team Profiles</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section id="coverage" className="w-full py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Global Reach</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    BugMed Labs proudly serves partners and projects across the globe. Explore our operational footprint.
                </p>
            </div>
            <div className="mt-12">
                 <Image
                    src="https://placehold.co/1200x600.png"
                    alt="Map of service areas"
                    width={1200}
                    height={600}
                    className="mx-auto rounded-lg shadow-xl"
                    data-ai-hint="world map"
                  />
            </div>
            <div className="text-center mt-12">
                <Button asChild>
                    <Link href="/coverage">Explore Our Coverage</Link>
                </Button>
            </div>
           </div>
        </section>
      </main>
    </div>
  );
}

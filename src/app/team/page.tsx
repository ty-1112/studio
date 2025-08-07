import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShareButton } from '@/components/share-button';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the expert team of scientists and researchers at BugMed Labs.',
};

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    title: "Director of Entomology",
    initials: "ER",
    expertise: "Expert in mosquito biology, vector competence for arboviruses, and insecticide resistance mechanisms.",
    image: "https://placehold.co/128x128.png",
    aiHint: "woman scientist"
  },
  {
    name: "Dr. Ben Carter",
    title: "Head of Molecular Biology",
    initials: "BC",
    expertise: "Specializes in pathogen screening using qPCR, next-gen sequencing, and bioinformatics for vector genomics.",
    image: "https://placehold.co/128x128.png",
    aiHint: "man scientist"
  },
  {
    name: "Aisha Khan",
    title: "Lead Laboratory Technologist",
    initials: "AK",
    expertise: "Manages laboratory operations, quality control, and execution of WHO-standard insecticide bioassays.",
    image: "https://placehold.co/128x128.png",
    aiHint: "woman researcher"
  },
  {
    name: "Dr. Samuel Jones",
    title: "Field Operations Coordinator",
    initials: "SJ",
    expertise: "Coordinates vector surveillance programs, sample collection logistics, and community engagement.",
    image: "https://placehold.co/128x128.png",
    aiHint: "man field worker"
  },
   {
    name: "Dr. Isabella Rossi",
    title: "Tick-Borne Disease Specialist",
    initials: "IR",
    expertise: "Focuses on the ecology of ticks and the transmission dynamics of Lyme disease and anaplasmosis.",
    image: "https://placehold.co/128x128.png",
    aiHint: "woman biologist"
  },
  {
    name: "Marcus Chen",
    title: "Data Scientist",
    initials: "MC",
    expertise: "Develops predictive models for disease outbreaks based on entomological and environmental data.",
    image: "https://placehold.co/128x128.png",
    aiHint: "man data scientist"
  }
];

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Meet Our Experts</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Our team is composed of dedicated professionals at the forefront of medical entomology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardHeader className="items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.aiHint} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline">{member.name}</CardTitle>
              <CardDescription className="text-primary font-semibold">{member.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">{member.expertise}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
            <ShareButton text="Share Our Team Page" />
      </div>
    </div>
  );
}

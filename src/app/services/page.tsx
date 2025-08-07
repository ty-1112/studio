import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, TestTube, Dna, FlaskConical, Bug, ShieldCheck } from 'lucide-react';
import { ShareButton } from '@/components/share-button';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the comprehensive laboratory services offered by BugMed Labs for medical entomology and vector-borne disease research.',
};

const services = [
    {
        icon: TestTube,
        title: "Vector Species Identification",
        description: "Utilizing both traditional morphological techniques and modern molecular barcoding (e.g., COI sequencing) to provide definitive identification of medically important arthropods like mosquitoes, ticks, and flies."
    },
    {
        icon: Microscope,
        title: "Arbovirus & Pathogen Screening",
        description: "Advanced qPCR and RT-qPCR assays to screen vector populations for a wide array of pathogens, including Zika, Dengue, Chikungunya, West Nile virus, and malaria parasites."
    },
    {
        icon: FlaskConical,
        title: "Insecticide Resistance Profiling",
        description: "Conducting WHO-standard bottle bioassays and CDC-approved susceptibility tests to determine resistance levels to various classes of insecticides, informing effective vector control strategies."
    },
    {
        icon: Dna,
        title: "Molecular Resistance Mechanism Analysis",
        description: "Genotyping for known resistance markers such as kdr mutations (V1016I, F1534C) and metabolic resistance genes to understand the underlying mechanisms of insecticide failure."
    },
    {
        icon: Bug,
        title: "Vector Competence Studies",
        description: "Controlled laboratory experiments to assess the ability of local vector populations to acquire and transmit specific pathogens, determining regional disease risk."
    },
    {
        icon: ShieldCheck,
        title: "Quality Control of Vector Control Tools",
        description: "Testing the efficacy and quality of vector control products such as long-lasting insecticidal nets (LLINs) and indoor residual spraying (IRS) formulations to ensure they meet public health standards."
    }
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Laboratory Services</h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
                We provide a full spectrum of specialized services to support public health agencies, researchers, and vector control programs worldwide.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <Card key={service.title} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <service.icon className="w-10 h-10 text-accent" />
                            <CardTitle className="font-headline">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p>{service.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <ShareButton text="Share Our Services" />
        </div>
    </div>
  );
}

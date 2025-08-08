
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const translations = {
  en: {
    title: "Case Studies",
    subtitle: "Explore real-world examples of how our platform is accelerating the future of drug discovery and creating new therapeutic possibilities.",
    learnMore: "Learn more about our capabilities",
    exploreHypothesis: "Explore Our Research",
    studies: [
      {
        id: 'cs-02',
        title: 'Re-engineering Recovery: A New Path for Chronic Spinal Cord Injury',
        image: '/spinal.jpg',
        imageHint: 'neuron synapse',
        link: "/contact"
      },
      {
        id: 'cs-03',
        title: 'AI-Generated Asset: A New Paradigm for Type 1 Diabetes',
        image: '/diabetes 1.jpg',
        imageHint: 'child diabetes care',
        link: "/research"
      },
      {
        id: 'cs-04',
        title: 'Unlocking New Potential: An Established Antibiotic Reimagined for Type 2 Diabetes',
        image: '/diabetes 2.jpg',
        imageHint: 'gut microbiome illustration',
        link: "/contact"
      },
    ]
  },
  ar: {
    title: "دراسات الحالة",
    subtitle: "استكشف أمثلة من العالم الحقيقي لكيفية تسريع منصتنا لمستقبل اكتشاف الأدوية وخلق إمكانيات علاجية جديدة.",
    learnMore: "تعرف على المزيد حول قدراتنا",
    exploreHypothesis: "اكتشف أبحاثنا",
    studies: [
      {
        id: 'cs-02',
        title: 'إعادة هندسة التعافي: مسار جديد لإصابات الحبل الشوكي المزمنة',
        image: '/spinal.jpg',
        imageHint: 'neuron synapse',
        link: "/contact"
      },
      {
        id: 'cs-03',
        title: 'أصل مولّد بالذكاء الاصطناعي: نموذج جديد لمرض السكري من النوع الأول',
        image: '/diabetes 1.jpg',
        imageHint: 'child diabetes care',
        link: "/research"
      },
      {
        id: 'cs-04',
        title: 'إطلاق إمكانات جديدة: إعادة تصور مضاد حيوي معروف لمرض السكري من النوع الثاني',
        image: '/diabetes 2.jpg',
        imageHint: 'gut microbiome illustration',
        link: "/contact"
      },
    ]
  }
};


export default function CaseStudiesPage() {
  const { t, language } = useLanguage();
  const T = t(translations);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <section className="py-20 md:py-32 pt-32 md:pt-48 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">{T.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {T.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {T.studies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/30 border-cyan-400/20">
                <div className="grid md:grid-cols-5">
                  <div className={`relative md:col-span-2 min-h-[300px] bg-black/20 flex items-center justify-center p-4 ${index % 2 !== 0 ? (language === 'ar' ? 'md:order-first' : 'md:order-last') : ''}`}>
                    <Image src={study.image} alt={study.title} fill className="object-contain w-full h-full" data-ai-hint={study.imageHint}/>
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="text-2xl text-cyan-400">{study.title}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                       <Link href={study.link} className="text-cyan-400 hover:underline flex items-center font-semibold">
                          {study.link === '/research' ? T.exploreHypothesis : T.learnMore} {language === 'en' && <ArrowRight className="ml-2 h-4 w-4" />}
                       </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

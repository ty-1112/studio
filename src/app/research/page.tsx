
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Beaker, BrainCircuit, Target } from 'lucide-react';

const translations = {
    en: {
        title: "Our Discovery Engine in Action",
        subtitle: "At BugMed Labs, our AI platform is not just an analysis tool—it's an engine for creating tangible, high-value therapeutic assets.",
        hypothesisTitle: "AI-Generated Asset: A New Paradigm for Type 1 Diabetes",
        hypothesisDescription: "By analyzing complex, multi-modal data, our platform identified an opportunity to create a new therapeutic program.",
        learnMore: "Our platform is constantly uncovering new possibilities. Partner with us to turn these digital discoveries into real-world therapies.",
        contactUs: "Contact Us"
    },
    ar: {
        title: "محرك الاكتشاف الخاص بنا قيد العمل",
        subtitle: "في BugMed Labs، منصة الذكاء الاصطناعي لدينا ليست مجرد أداة تحليل - إنها محرك لإنشاء أصول علاجية ملموسة وعالية القيمة.",
        hypothesisTitle: "أصل مولّد بالذكاء الاصطناعي: نموذج جديد لمرض السكري من النوع الأول",
        hypothesisDescription: "من خلال تحليل البيانات المعقدة متعددة الوسائط، حددت منصتنا فرصة لإنشاء برنامج علاجي جديد.",
        learnMore: "منصتنا تكشف باستمرار عن إمكانيات جديدة. شارك معنا لتحويل هذه الاكتشافات الرقمية إلى علاجات واقعية.",
        contactUs: "تواصل معنا"
    }
}


export default function ResearchPage() {
    const { t, language } = useLanguage();
    const T = t(translations);

    return (
        <div className="bg-background text-foreground">
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
                    <Card className="overflow-hidden shadow-lg border-2 border-cyan-400/20 bg-secondary/30">
                        <div className="grid md:grid-cols-2">
                             <div className="p-8 md:p-12 flex flex-col justify-center">
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-4">
                                        <BrainCircuit className="h-10 w-10 text-cyan-400" />
                                        <CardTitle className="text-3xl text-cyan-400">{T.hypothesisTitle}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base text-neutral-300">
                                        {T.hypothesisDescription}
                                    </CardDescription>
                                </CardHeader>
                            </div>
                             <div className="relative min-h-[400px] bg-black/20 flex items-center justify-center p-4">
                                <Image 
                                    src="/Type1.jpg"
                                    alt="A child testing their blood sugar for diabetes" 
                                    fill
                                    className="object-contain w-full h-full"
                                    data-ai-hint="child diabetes care"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
             <section className="py-20 md:py-32 bg-secondary/20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary">{T.learnMore}</h2>
                    <Button asChild size="lg" className="mt-6 bg-cyan-400 text-background hover:bg-cyan-500">
                        <Link href="/contact">{T.contactUs}</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

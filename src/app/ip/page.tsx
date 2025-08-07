"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, FileClock } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const translations = {
  en: {
    title: "Intellectual Property",
    subtitle: "Our innovation is protected by a growing portfolio of patents, safeguarding our unique position at the intersection of biotech and AI.",
    patents: [
      {
        id: 'US 63/837,405',
        title: 'A System and Method for AI-Driven Discovery and De-risking of Arthropod-Derived Therapeutics',
        status: 'Provisional',
        summary: 'A foundational provisional patent for the core system and methodology that powers our platform, focusing on the AI-driven discovery and risk-reduction of therapeutics derived from arthropods.',
        link: null
      }
    ],
    wipTitle: "Future Patents in Progress",
    wipDescription: "Patents for additional platform-generated discoveries are currently being drafted and filed. Our innovation pipeline is constantly active."
  },
  ar: {
    title: "الملكية الفكرية",
    subtitle: "ابتكاراتنا محمية بمحفظة متنامية من براءات الاختراع، مما يحمي مكانتنا الفريدة عند تقاطع التكنولوجيا الحيوية والذكاء الاصطناعي.",
    patents: [
      {
        id: 'US 63/837,405',
        title: 'نظام وطريقة للاكتشاف القائم على الذكاء الاصطناعي وإزالة مخاطر العلاجات المشتقة من المفصليات',
        status: 'مؤقتة',
        summary: 'براءة اختراع مؤقتة تأسيسية للنظام والمنهجية الأساسية التي تشغل منصتنا، مع التركيز على الاكتشاف المدفوع بالذكاء الاصطناعي وتقليل المخاطر للعلاجات المشتقة من المفصليات.',
        link: null
      }
    ],
    wipTitle: "براءات الاختراع المستقبلية قيد الإعداد",
    wipDescription: "براءات الاختراع للاكتشافات الإضافية التي تم إنشاؤها عبر المنصة هي حاليًا قيد الصياغة والإيداع. خط أنابيب الابتكار لدينا نشط باستمرار."
  }
};


export default function IpPage() {
  const { t } = useLanguage();
  const T = t(translations);

  const getStatusVariant = (status: string) => {
    switch(status.toLowerCase()) {
      case 'granted':
      case 'ممنوحة':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getStatusClass = (status: string) => {
     switch(status.toLowerCase()) {
      case 'granted':
      case 'ممنوحة':
        return 'bg-green-600 text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  }

  const PatentCard = ({ patent }: { patent: typeof T.patents[0] }) => (
    <Card className="flex flex-col hover:shadow-lg transition-shadow bg-secondary/50 border-cyan-400/20 h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <FileText className="h-8 w-8 text-cyan-400" />
          <Badge variant={getStatusVariant(patent.status)} className={getStatusClass(patent.status)}>
            {patent.status}
          </Badge>
        </div>
        <CardTitle className="pt-4 text-cyan-400">{patent.title}</CardTitle>
        <CardDescription className="text-neutral-400">{patent.id}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-neutral-300">{patent.summary}</p>
      </CardContent>
    </Card>
  );

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {T.patents.map((patent) => (
               patent.link ? (
                <Link key={patent.id} href={patent.link} target="_blank" rel="noopener noreferrer" className="flex">
                  <PatentCard patent={patent} />
                </Link>
              ) : (
                <div key={patent.id} className="flex">
                  <PatentCard patent={patent} />
                </div>
              )
            ))}
          </div>
           <div className="mt-16 max-w-2xl mx-auto">
             <Alert className="bg-secondary/50 border-cyan-400/20 text-neutral-100">
                <FileClock className="h-5 w-5 text-cyan-400" />
                <AlertTitle className="font-bold text-cyan-400">{T.wipTitle}</AlertTitle>
                <AlertDescription className="text-neutral-300">
                 {T.wipDescription}
                </AlertDescription>
              </Alert>
          </div>
        </div>
      </section>
    </div>
  );
}

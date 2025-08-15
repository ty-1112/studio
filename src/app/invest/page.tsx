"use client";

import { useLanguage } from '@/context/language-context';
import { Rocket, TestTube, Handshake, Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const translations = {
  en: {
    title: "Invest in The Future of Medicine",
    subtitle: "We offer strategic partnerships to translate our computational discoveries into tangible, high-value therapeutic assets.",
    contactForInvestment: "To discuss investment or partnership opportunities, please contact us directly.",
    contactUs: "Contact Us",
    investmentThesis: "Our Investment Thesis: De-risked, Data-Driven, Capital-Efficient Biotech",
    
    seedStageTitle: "Seed & Pre-Seed Stage",
    seedStageDescription: "This capital is deployed to validate our most promising AI-generated hypotheses. Funds are allocated to contract research organizations (CROs) to perform the crucial in-vitro proof-of-concept, generating high-value, lab-validated intellectual property.",
    
    venturePartnershipTitle: "Venture & Corporate Partnership",
    venturePartnershipDescription: "Co-develop a full therapeutic program. We bring de-risked, data-driven assets; you bring the scale and expertise to accelerate the path to clinical trials and market entry.",

    whyCryptoTitle: "A Note on Funding Mechanisms",
    whyCryptoDescription: "Our main office is in Yemen, which presents temporary challenges for traditional banking. For strategic venture-level partnerships, we are establishing international corporate structures to facilitate standard investment vehicles. For initial seed-stage contributions to validate specific hypotheses, we can facilitate secure transactions via cryptocurrency following a direct discussion. We appreciate your partnership as we navigate this phase."
  },
  ar: {
    title: "استثمر في مستقبل الطب",
    subtitle: "نحن نقدم شراكات استراتيجية لترجمة اكتشافاتنا الحاسوبية إلى أصول علاجية ملموسة وعالية القيمة.",
    contactForInvestment: "لمناقشة فرص الاستثمار أو الشراكة، يرجى التواصل معنا مباشرة.",
    contactUs: "تواصل معنا",
    investmentThesis: "أطروحتنا الاستثمارية: تكنولوجيا حيوية عالية الكفاءة في رأس المال، مُزالة المخاطر ومدفوعة بالبيانات",

    seedStageTitle: "مرحلة التمويل الأولي (Seed)",
    seedStageDescription: "يتم استخدام هذا التمويل للتحقق من صحة فرضياتنا الواعدة التي يولدها الذكاء الاصطناعي. تُخصص الأموال لمنظمات الأبحاث التعاقدية (CROs) لإجراء إثبات المفهوم الأساسي في المختبر (in-vitro)، مما يولد ملكية فكرية عالية القيمة ومُثبتة معمليًا.",
    
    venturePartnershipTitle: "الشراكات الاستثمارية والمؤسسية",
    venturePartnershipDescription: "شارك في تطوير برنامج علاجي متكامل. نحن نقدم أصولاً مُزالة المخاطر ومدفوعة بالبيانات؛ وأنتم تجلبون الخبرة والنطاق لتسريع المسار نحو التجارب السريرية ودخول السوق.",

    whyCryptoTitle: "ملاحظة حول آليات التمويل",
    whyCryptoDescription: "يقع مكتبنا الرئيسي في اليمن، مما يفرض تحديات مؤقتة على الخدمات المصرفية التقليدية. بالنسبة للشراكات الاستثمارية الاستراتيجية، نعمل على تأسيس هياكل شركات دولية لتسهيل أدوات الاستثمار القياسية. بالنسبة لمساهمات مرحلة التمويل الأولي للتحقق من فرضيات محددة، يمكننا تسهيل المعاملات الآمنة عبر العملات المشفرة بعد إجراء مناقشة مباشرة. نقدر شراكتكم بينما نتجاوز هذه المرحلة."
  }
};

export default function InvestPage() {
  const { t } = useLanguage();
  const T = t(translations);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 pt-32 md:pt-48">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <Rocket className="h-12 w-12 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {T.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {T.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">{T.investmentThesis}</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Card className="bg-secondary/30 border-cyan-400/20 text-center p-6">
               <CardHeader>
                 <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <TestTube className="h-8 w-8 text-cyan-400" />
                 </div>
                 <CardTitle className="text-neutral-100">{T.seedStageTitle}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-neutral-300">{T.seedStageDescription}</p>
               </CardContent>
             </Card>
             <Card className="bg-secondary/30 border-cyan-400/20 text-center p-6">
               <CardHeader>
                  <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-cyan-400" />
                 </div>
                 <CardTitle className="text-neutral-100">{T.venturePartnershipTitle}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-neutral-300">{T.venturePartnershipDescription}</p>
               </CardContent>
             </Card>
           </div>
            <div className="text-center mt-16 bg-secondary/20 py-8 px-6 rounded-lg max-w-3xl mx-auto">
                 <p className="text-xl text-neutral-200 mb-4">{T.contactForInvestment}</p>
                 <Button asChild size="lg" className="bg-cyan-400 text-background hover:bg-cyan-500">
                     <Link href="/contact">{T.contactUs}</Link>
                 </Button>
            </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <Alert className="bg-secondary/50 border-cyan-400/20 text-neutral-100">
              <Info className="h-5 w-5 text-cyan-400" />
              <AlertTitle className="font-bold text-cyan-400">{T.whyCryptoTitle}</AlertTitle>
              <AlertDescription className="text-neutral-300">
                {T.whyCryptoDescription}
              </AlertDescription>
            </Alert>
        </div>
      </section>

    </div>
  );
}

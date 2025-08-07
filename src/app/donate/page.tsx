"use client";

import { useLanguage } from '@/context/language-context';
import { Heart, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const translations = {
  en: {
    title: "Support Our Mission",
    subtitle: "Your contribution accelerates our research and brings us closer to developing life-saving therapies. Every donation makes a difference.",
    whyCryptoTitle: "Why Cryptocurrency?",
    whyCryptoDescription: "Our main office is located in Yemen, a region currently facing significant banking restrictions due to the ongoing political situation. This makes processing traditional payments like Visa, Mastercard, or PayPal challenging for us at the moment. Cryptocurrencies provide a transparent and accessible way for us to receive support from our global community. We are actively working on establishing international banking to enable traditional payment methods in the near future."
  },
  ar: {
    title: "ادعم مهمتنا",
    subtitle: "مساهمتك تسرّع من أبحاثنا وتقربنا من تطوير علاجات منقذة للحياة. كل تبرع يُحدث فرقًا.",
    whyCryptoTitle: "لماذا العملات المشفرة؟",
    whyCryptoDescription: "يقع مكتبنا الرئيسي في اليمن، وهي منطقة تواجه حاليًا قيودًا مصرفية كبيرة بسبب الوضع السياسي الراهن. هذا يجعل معالجة المدفوعات التقليدية مثل فيزا أو ماستركارد أو باي بال صعبة بالنسبة لنا في الوقت الحالي. توفر العملات المشفرة وسيلة شفافة وسهلة للوصول لتلقي الدعم من مجتمعنا العالمي. نحن نعمل بنشاط على تأسيس معاملات مصرفية دولية لتمكين طرق الدفع التقليدية في المستقبل القريب."
  }
};

export default function DonatePage() {
  const { t } = useLanguage();
  const T = t(translations);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 pt-32 md:pt-48">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <Heart className="h-12 w-12 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {T.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {T.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <Alert className="bg-secondary/50 border-cyan-400/20 text-neutral-100">
              <Info className="h-5 w-5 text-cyan-400" />
              <AlertTitle className="font-bold text-cyan-400">{T.whyCryptoTitle}</AlertTitle>
              <AlertDescription className="text-neutral-300">
                {T.whyCryptoDescription}
              </AlertDescription>
            </Alert>
        </div>
      </section>

      <section className="pb-20 md:pb-32 flex justify-center pt-10">
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
             <iframe 
                src="https://nowpayments.io/embeds/donation-widget?api_key=ca4f63da-fe4c-4ca6-8655-0a5e6a371734" 
                width="346" 
                height="623" 
                frameBorder="0" 
                scrolling="no" 
                style={{ overflowY: 'hidden' }}
            >
            </iframe>
        </div>
      </section>
    </div>
  );
}

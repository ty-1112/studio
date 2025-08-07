"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, FlaskConical, Bug, ArrowRight, Waypoints, Dna, FileSearch } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const translations = {
  en: {
    heroTitle: "Mapping the Future of Medicine",
    heroSubtitle: "We decode complex biology to uncover novel therapeutics, turning data into cures.",
    discoverWork: "Our Science",
    contactUs: "Partner with Us",
    theChallenge: "The Challenge: A Universe of Unknowns",
    challengeText: "The path from biological data to a life-saving therapy is incredibly complex and filled with uncertainty. Traditional methods are slow, expensive, and often fail to capture the intricate patterns of disease.",
    ourSolution: "Our Solution: A Hypothesis Generation Engine",
    solutionText: "Our platform navigates this complexity. It integrates multi-modal data to generate novel, testable, and data-driven therapeutic hypotheses, revealing pathways that were previously invisible.",
    uniqueApproach: "A New Discovery Paradigm",
    approachSubtitle: "We are reimagining drug discovery from first principles.",
    naturalBioprospecting: "Deep Biological Insight",
    naturalBioprospectingText: "We analyze data from diverse biological systems—from unique natural sources to complex human genomics—to understand the fundamental mechanisms of disease.",
    aiHypothesisGeneration: "AI-Powered Generation",
    aiHypothesisGenerationText: "Our AI engine doesn't just screen—it reasons. It identifies scientific gaps and formulates entirely new therapeutic strategies, creating de-risked, high-value assets.",
    drugRepurposing: "Accelerated Pathways",
    drugRepurposingText: "By analyzing existing drugs, we uncover hidden potential, predict side effects, and create faster, more direct paths to clinical impact.",
    joinFuture: "Collaborate with Us",
    joinFutureText: "We are seeking partners to translate these breakthrough discoveries into tangible therapies. Let's build the future of medicine, together.",
  },
  ar: {
    heroTitle: "نرسم ملامح مستقبل الطب",
    heroSubtitle: "نقوم بفك شفرة البيولوجيا المعقدة للكشف عن علاجات مبتكرة، محولين البيانات إلى علاجات.",
    discoverWork: "علومنا",
    contactUs: "كن شريكًا لنا",
    theChallenge: "التحدي: عالم من المجهول",
    challengeText: "إن الطريق من البيانات البيولوجية إلى العلاج المنقذ للحياة معقد للغاية ومليء بالشكوك. الطرق التقليدية بطيئة ومكلفة، وغالبًا ما تفشل في التقاط الأنماط المعقدة للمرض.",
    ourSolution: "حلنا: محرك لتوليد الفرضيات",
    solutionText: "منصتنا تتجاوز هذا التعقيد. إنها تدمج البيانات متعددة الوسائط لتوليد فرضيات علاجية جديدة، قابلة للاختبار، ومدفوعة بالبيانات، كاشفة عن مسارات كانت غير مرئية سابقًا.",
    uniqueApproach: "نموذج اكتشاف جديد",
    approachSubtitle: "نعيد تصور اكتشاف الأدوية من المبادئ الأولى.",
    naturalBioprospecting: "رؤية بيولوجية عميقة",
    naturalBioprospectingText: "نقوم بتحليل البيانات من أنظمة بيولوجية متنوعة—من المصادر الطبيعية الفريدة إلى الجينوم البشري المعقد—لفهم الآليات الأساسية للمرض.",
    aiHypothesisGeneration: "توليد مدعوم بالذكاء الاصطناعي",
    aiHypothesisGenerationText: "محرك الذكاء الاصطناعي لدينا لا يقوم بالفرز فحسب، بل يستنتج. إنه يحدد الفجوات العلمية ويصوغ استراتيجيات علاجية جديدة تمامًا، مما يخلق أصولًا عالية القيمة ومُزالة المخاطر.",
    drugRepurposing: "مسارات متسارعة",
    drugRepurposingText: "من خلال تحليل الأدوية الحالية، نكشف عن إمكانات خفية، ونتنبأ بالآثار الجانبية، ونخلق مسارات أسرع وأكثر مباشرة للتأثير السريري.",
    joinFuture: "تعاون معنا",
    joinFutureText: "نسعى لشركاء لترجمة هذه الاكتشافات الخارقة إلى علاجات ملموسة. فلنبنِ مستقبل الطب معًا.",
  }
};


export default function Home() {
  const { t, language } = useLanguage();
  const T = t(translations);

  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-20"
        >
          <source src="https://storage.googleapis.com/studio-hosting-assets/network-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {T.heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
              {T.heroSubtitle}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/case-studies">{T.discoverWork}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                <Link href="/contact">{T.contactUs} {language === 'en' && <ArrowRight className="ml-2 h-5 w-5" />}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">{T.theChallenge}</h2>
              <p className="text-lg text-neutral-300">
                {T.challengeText}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">{T.ourSolution}</h2>
              <p className="text-lg text-neutral-300">
                {T.solutionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{T.uniqueApproach}</h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              {T.approachSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-secondary/50 border-cyan-400/20 text-center hover:border-cyan-400/50 transition-colors duration-300">
              <CardHeader>
                <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center">
                  <Dna className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="mt-4 text-neutral-100">{T.naturalBioprospecting}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  {T.naturalBioprospectingText}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-cyan-400/20 text-center hover:border-cyan-400/50 transition-colors duration-300">
              <CardHeader>
                <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="mt-4 text-neutral-100">{T.aiHypothesisGeneration}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  {T.aiHypothesisGenerationText}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-cyan-400/20 text-center hover:border-cyan-400/50 transition-colors duration-300">
              <CardHeader>
                <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center">
                  <FileSearch className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="mt-4 text-neutral-100">{T.drugRepurposing}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  {T.drugRepurposingText}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">{T.joinFuture}</h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            {T.joinFutureText}
          </p>
          <Button asChild size="lg" className="mt-8 bg-cyan-400 text-background hover:bg-cyan-500">
            <Link href="/contact">{T.contactUs}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

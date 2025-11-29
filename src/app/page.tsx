
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BrainCircuit, FlaskConical, Bug, ArrowRight, Waypoints, Dna, FileSearch, Clock, AlertTriangle, CheckCircle, Telescope } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { Badge } from '@/components/ui/badge';

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
    
    validationTitle: "Historical Validation: Preventing Disaster",
    validationIntro: "\"If our platform existed in 1957, the Thalidomide tragedy could have been averted.\" This is not just a claim; it's a demonstration of our platform's power.",
    scenario: "The 1957 Scenario",
    scenarioText: "We asked our AI to analyze Thalidomide based only on scientific knowledge available in 1957, just before its launch as a 'safe' anti-nausea drug for pregnant women.",
    aiHypothesis: "AI's Prescient Hypothesis",
    aiHypothesisText: "The AI predicted Thalidomide could interfere with rapidly dividing cells during embryogenesis, leading to developmental abnormalities, by hypothesizing it acts as a glutamine antagonist.",
    theReality: "The Tragic Reality",
    theRealityText: "Years later, Thalidomide caused severe birth defects (phocomelia) in thousands of children, confirming its devastating effect on embryonic development.",
    theVerdict: "The Verdict",
    verdictScore: "8/10 Hypothesis Similarity Score",
    verdictText: "The AI's core hypothesis was remarkably accurate. While the exact molecular target (CRBN) was discovered decades later, the platform correctly identified the risk to embryonic development, proving its ability to see signals that were missed by human experts.",
    
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
    
    validationTitle: "الإثبات التاريخي: منع الكارثة",
    validationIntro: "\"لو كانت منصتنا موجودة في عام 1957، لكان من الممكن تجنب مأساة الثاليدومايد.\" هذا ليس مجرد ادعاء؛ بل هو إثبات لقوة منصتنا.",
    scenario: "سيناريو عام 1957",
    scenarioText: "طلبنا من الذكاء الاصطناعي تحليل دواء الثاليدومايد بناءً فقط على المعرفة العلمية المتاحة في عام 1957، قبل إطلاقه كدواء 'آمن' مضاد للغثيان للنساء الحوامل.",
    aiHypothesis: "فرضية الذكاء الاصطناعي الاستباقية",
    aiHypothesisText: "توقع الذكاء الاصطناعي أن الثاليدومايد يمكن أن يتداخل مع الخلايا سريعة الانقسام أثناء التطور الجنيني، مما يؤدي إلى تشوهات في النمو، مفترضًا أنه يعمل كمضاد للجلوتامين.",
    theReality: "الواقع المأساوي",
    theRealityText: "بعد سنوات، تسبب الثاليدومايد في تشوهات خلقية حادة (متلازمة الأطراف الفقمية) لآلاف الأطفال، مما أكد تأثيره المدمر على التطور الجنيني.",
    theVerdict: "الحكم النهائي",
    verdictScore: "8/10 درجة تشابه الفرضية",
    verdictText: "كانت الفرضية الأساسية للذكاء الاصطناعي دقيقة بشكل ملحوظ. في حين تم اكتشاف الهدف الجزيئي الدقيق (CRBN) بعد عقود، حددت المنصة بشكل صحيح الخطر على التطور الجنيني، مما يثبت قدرتها على رؤية إشارات أغفلها الخبراء البشر.",
    
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
          <source src="https://storage.googleapis.com/studio-hosting-assets/plexus-white-orange.mp4" type="video/mp4" />
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
      
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{T.validationTitle}</h2>
            <p className="mt-4 text-lg md:text-xl text-cyan-400/80 max-w-3xl mx-auto italic">
              {T.validationIntro}
            </p>
          </div>
          <Card className="bg-secondary/50 border-2 border-cyan-400/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-6 md:col-span-2 border-b md:border-b-0 md:border-r border-cyan-400/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-cyan-400" />
                    <span className="text-2xl text-neutral-100">{T.scenario}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{T.scenarioText}</p>
                </CardContent>
              </div>
              <div className="p-6 bg-cyan-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-400" />
                    <span className="text-2xl text-neutral-100">{T.theReality}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-200/80">{T.theRealityText}</p>
                </CardContent>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-cyan-400/20">
               <div className="p-6 bg-cyan-400/10 md:col-span-2">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-3">
                      <Telescope className="h-6 w-6 text-cyan-300" />
                     <span className="text-2xl text-cyan-300">{T.aiHypothesis}</span>
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-neutral-200">{T.aiHypothesisText}</p>
                 </CardContent>
               </div>
               <div className="p-6 bg-green-500/10 border-t md:border-t-0 md:border-l border-cyan-400/20">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-3">
                     <CheckCircle className="h-6 w-6 text-green-400" />
                     <span className="text-2xl text-green-400">{T.theVerdict}</span>
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                    <Badge className="bg-green-600/80 text-white mb-4 text-sm">{T.verdictScore}</Badge>
                   <p className="text-green-200/80">{T.verdictText}</p>
                 </CardContent>
               </div>
            </div>
          </Card>
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

    
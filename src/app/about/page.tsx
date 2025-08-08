
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Target, Microscope } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const translations = {
  en: {
    title: "About BugMed Labs",
    subtitle: "We are a team of scientists, engineers, and visionaries using artificial intelligence to build the next generation of therapeutics.",
    ourMission: "Our Mission",
    missionText1: "To build the world's most advanced therapeutic discovery engine. We integrate multi-modal biological data with the power of AI to dramatically reduce the time, cost, and risk of developing new medicines.",
    missionText2: "Our platform generates novel, testable hypotheses for complex diseases and identifies hidden potential in existing compounds, creating a new paradigm for drug discovery.",
    ourValues: "Our Values",
    valuesSubtitle: "The principles that guide our research and our business.",
    innovation: "Innovation",
    innovationText: "We are driven by curiosity and a passion for creative problem-solving, constantly pushing the boundaries of what's possible in computational medicine.",
    scientificRigor: "Scientific Rigor",
    scientificRigorText: "Our work is built on a foundation of meticulous research, data-driven decisions, and a commitment to the highest ethical standards.",
    impactfulPurpose: "Impactful Purpose",
    impactfulPurposeText: "We are singularly focused on translating our computational discoveries into tangible therapies that improve and save lives.",
    meetFounder: "Meet Our Founder",
    founderName: "Dr. Tamer Yasser Abdulmughni",
    founderQuoteIntro: "In the name of Allah, the Most Gracious, the Most Merciful. He says: (And of knowledge, you have been given little) Surah Al-Isra, Verse 85.",
    founderQuote: "\"We start where others get lost. I founded BugMed Labs with the belief that the solutions to our most complex medical problems are hidden within the patterns of biological data. By combining the power of artificial intelligence with human ingenuity, we can create a healthier future for everyone. Our journey is just beginning, and the potential for discovery is limitless.\""
  },
  ar: {
    title: "حول BugMed Labs",
    subtitle: "نحن فريق من العلماء والمهندسين وأصحاب الرؤى نستخدم الذكاء الاصطناعي لبناء الجيل القادم من العلاجات.",
    ourMission: "مهمتنا",
    missionText1: "بناء محرك اكتشاف علاجي هو الأكثر تقدمًا في العالم. نحن ندمج البيانات البيولوجية متعددة الوسائط مع قوة الذكاء الاصطناعي لتقليل الوقت والتكلفة والمخاطر بشكل كبير في تطوير أدوية جديدة.",
    missionText2: "تولد منصتنا فرضيات جديدة قابلة للاختبار للأمراض المعقدة وتحدد الإمكانات الخفية في المركبات الحالية، مما يخلق نموذجًا جديدًا لاكتشاف الأدوية.",
    ourValues: "قيمنا",
    valuesSubtitle: "المبادئ التي توجه أبحاثنا وأعمالنا.",
    innovation: "الابتكار",
    innovationText: "يدفعنا الفضول وشغفنا بحل المشكلات الإبداعية، وندفع باستمرار حدود ما هو ممكن في الطب الحاسوبي.",
    scientificRigor: "الدقة العلمية",
    scientificRigorText: "يعتمد عملنا على أساس من البحث الدقيق والقرارات المستندة إلى البيانات والالتزام بأعلى المعايير الأخلاقية.",
    impactfulPurpose: "التأثير الهادف",
    impactfulPurposeText: "نحن نركز على هدف واحد: ترجمة اكتشافاتنا الحاسوبية إلى علاجات ملموسة تعمل على تحسين وإنقاذ الأرواح.",
    meetFounder: "تعرف على مؤسسنا",
    founderName: "د. تامر ياسر عبدالمغني",
    founderQuoteIntro: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قَالَ تَعَالَى: (وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا) سورة الإسراء، الآية 85.",
    founderQuote: "\"بدأنا من النقطة التي تاه فيها الآخرون. لقد أسست BugMed Labs إيمانًا مني بأن حلول مشاكلنا الطبية الأكثر تعقيدًا مخفية داخل أنماط البيانات البيولوجية. من خلال الجمع بين قوة الذكاء الاصطناعي وبراعة الإنسان، يمكننا خلق مستقبل أكثر صحة للجميع. رحلتنا قد بدأت للتو، وإمكانيات الاكتشاف لا حدود لها.\""
  }
};

export default function AboutPage() {
  const { t } = useLanguage();
  const T = t(translations);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 pt-32 md:pt-48">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">{T.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {T.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">{T.ourMission}</h2>
              <p className="text-neutral-300 mb-4">
                {T.missionText1}
              </p>
              <p className="text-neutral-300">
                {T.missionText2}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image src="https://placehold.co/600x450.png" alt={T.ourMission} width={600} height={450} className="rounded-lg shadow-lg" data-ai-hint="mission biology" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{T.ourValues}</h2>
                <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
                {T.valuesSubtitle}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center bg-secondary/50 border-cyan-400/20 hover:border-cyan-400/50 transition-colors duration-300">
                    <CardHeader>
                        <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center">
                            <Lightbulb className="h-8 w-8 text-cyan-400" />
                        </div>
                        <CardTitle className="mt-4 text-neutral-100">{T.innovation}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-neutral-300">{T.innovationText}</p></CardContent>
                </Card>
                <Card className="text-center bg-secondary/50 border-cyan-400/20 hover:border-cyan-400/50 transition-colors duration-300">
                    <CardHeader>
                        <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center">
                            <Microscope className="h-8 w-8 text-cyan-400" />
                        </div>
                        <CardTitle className="mt-4 text-neutral-100">{T.scientificRigor}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-neutral-300">{T.scientificRigorText}</p></CardContent>
                </Card>
                <Card className="text-center bg-secondary/50 border-cyan-400/20 hover:border-cyan-400/50 transition-colors duration-300">
                    <CardHeader>
                        <div className="mx-auto bg-cyan-400/10 rounded-full h-16 w-16 flex items-center justify-center">
                            <Target className="h-8 w-8 text-cyan-400" />
                        </div>
                        <CardTitle className="mt-4 text-neutral-100">{T.impactfulPurpose}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-neutral-300">{T.impactfulPurposeText}</p></CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Image src="/founder.jpg" alt="Dr. Tamer Yasser Abdulmughni, Founder of BugMed Labs" width={400} height={400} className="rounded-full mx-auto shadow-lg" data-ai-hint="founder portrait" />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-cyan-400">{T.meetFounder}</h2>
              <p className="mt-2 text-2xl text-primary font-medium">{T.founderName}</p>
              <blockquote className="mt-4 text-neutral-300 italic">
                <p className="mb-4 text-xl font-medium not-italic text-cyan-400/90">{T.founderQuoteIntro}</p>
                <p>{T.founderQuote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

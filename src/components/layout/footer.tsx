
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';

const translations = {
  en: {
    bio: "We start where others get lost.",
    ceoFounder: "CEO & Founder",
    quickLinks: "Quick Links",
    about: "About Us",
    caseStudies: "Case Studies",
    ip: "IP Summary",
    research: "Research",
    donate: "Donate",
    invest: "Invest",
    contact: "Contact Us",
    contactUs: "Contact",
    address: "Sana'a Taiz.ST south of dar-salm bridge",
    email: "info@bugmedlabs.com",
    rights: "All rights reserved.",
    founderName: "Dr. Tamer Yasser Abdulmughni"
  },
  ar: {
    bio: "بدأنا من النقطة التي تاه فيها الآخرون.",
    ceoFounder: "الرئيس التنفيذي والمؤسس",
    quickLinks: "روابط سريعة",
    about: "من نحن",
    caseStudies: "دراسات الحالة",
    ip: "ملخص الملكية الفكرية",
    research: "الأبحاث",
    donate: "تبرع",
    invest: "استثمر",
    contact: "تواصل معنا",
    contactUs: "اتصل بنا",
    address: "Sana'a Taiz.ST south of dar-salm bridge",
    email: "info@bugmedlabs.com",
    rights: "جميع الحقوق محفوظة.",
    founderName: "د. تامر ياسر عبدالمغني"
  },
};

export function Footer() {
  const { t, language } = useLanguage();
  const T = t(translations);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="border-t border-white/10 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="BugMed Labs Logo" width={24} height={24} className="h-6 w-6 text-primary" data-ai-hint="logo bug" />
              <span className="text-lg font-bold text-primary">BugMed Labs</span>
            </Link>
            <div className="space-y-4">
              <div>
                  <p className="text-sm text-neutral-400 max-w-xs italic">
                    "{T.bio}"
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-semibold text-neutral-200">{T.founderName}</p>
                    <p className="text-xs text-neutral-500">{T.ceoFounder}</p>
                  </div>
              </div>
              <div className="flex gap-4">
                  <a href="https://x.com/Bugmed_Labs" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                    <span className="sr-only">X Profile</span>
                  </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">{T.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.about}</Link></li>
              <li><Link href="/case-studies" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.caseStudies}</Link></li>
              <li><Link href="/ip" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.ip}</Link></li>
              <li><Link href="/research" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.research}</Link></li>
              <li><Link href="/invest" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.invest}</Link></li>
              <li><Link href="/donate" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.donate}</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-400 hover:text-primary transition-colors">{T.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">{T.contactUs}</h4>
             <ul className="space-y-2 text-sm text-neutral-400">
              <li>{T.address}</li>
              <li><a href={`mailto:${T.email}`} className="hover:text-primary transition-colors">{T.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} BugMed Labs. {T.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

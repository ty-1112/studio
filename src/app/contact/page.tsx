"use client";

import { Mail, Phone, MapPin, DollarSign } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const translations = {
  en: {
    title: "Get in Touch",
    subtitle: "We're looking for partners, investors, and talent to join us on our mission. Let's connect.",
    contactInfo: "Contact Information",
    ourOffice: "Our Office",
    address: "Sana'a Taiz.ST south of dar-salm bridge",
    emailUs: "Email Us",
    generalInquiries: "General Inquiries",
    partnerships: "Partnerships",
    callUs: "Call Us",
    phone: "00967770308402",
    sendMessage: "Send Us a Message",
    investTitle: "Become a Partner",
    investSubtitle: "Help accelerate the future of medicine by making a strategic investment.",
    investButton: "Invest Now"
  },
  ar: {
    title: "تواصل معنا",
    subtitle: "نبحث عن شركاء ومستثمرين ومواهب للانضمام إلينا في مهمتنا. لنتواصل.",
    contactInfo: "معلومات الاتصال",
    ourOffice: "مكتبنا",
    address: "صنعاء - شارع تعز - جنوب جسر دار سلم",
    emailUs: "راسلنا عبر البريد الإلكتروني",
    generalInquiries: "للاستفسارات العامة",
    partnerships: "للشراكات",
    callUs: "اتصل بنا",
    phone: "00967770308402",
    sendMessage: "أرسل لنا رسالة",
    investTitle: "كن شريكًا",
    investSubtitle: "ساعد في تسريع مستقبل الطب من خلال استثمار استراتيجي.",
    investButton: "استثمر الآن"
  }
};

export default function ContactPage() {
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
        <div className="container mx-auto px-4 md:px-6 grid gap-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-secondary/30 rounded-lg p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6">{T.contactInfo}</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                    <div className="bg-cyan-400/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-100">{T.ourOffice}</h3>
                        <p className="text-neutral-300">{T.address}</p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="bg-cyan-400/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-100">{T.emailUs}</h3>
                        <p className="text-neutral-300">
                        {T.generalInquiries}: <a href="mailto:info@bugmedlabs.com" className="text-cyan-400 hover:underline">info@bugmedlabs.com</a>
                        </p>
                        <p className="text-neutral-300">
                        {T.partnerships}: <a href="mailto:partners@bugmedlabs.com" className="text-cyan-400 hover:underline">partners@bugmedlabs.com</a>
                        </p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="bg-cyan-400/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-100">{T.callUs}</h3>
                        <p className="text-neutral-300">{T.phone}</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="bg-secondary/30 rounded-lg p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6">{T.sendMessage}</h2>
                <ContactForm />
                </div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-8 border border-cyan-400/20 text-center">
                 <div className="flex justify-center items-center mb-4">
                    <DollarSign className="h-10 w-10 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">{T.investTitle}</h2>
                <p className="text-neutral-300 mb-6 max-w-md mx-auto">{T.investSubtitle}</p>
                <Button asChild size="lg" className="bg-cyan-400 text-background hover:bg-cyan-500">
                    <Link href="/invest">{T.investButton}</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}

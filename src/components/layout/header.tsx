
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Languages, Heart, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

const navLinks = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/ip', label: 'IP' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/research', label: 'Research' },
  ],
  ar: [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'من نحن' },
    { href: '/ip', label: 'الملكية الفكرية' },
    { href: '/case-studies', label: 'دراسات الحالة' },
    { href: '/research', label: 'الأبحاث' },
  ],
};

const translations = {
  en: { 
    openMenu: "Open menu",
    contact: "Contact",
    donate: "Donate",
    invest: "Invest",
    mobileMenuTitle: "Main Menu"
  },
  ar: { 
    openMenu: "فتح القائمة", 
    contact: "تواصل معنا",
    donate: "تبرع",
    invest: "استثمر",
    mobileMenuTitle: "القائمة الرئيسية"
  },
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const currentNavLinks = t(navLinks);
  const T = t(translations);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/logo.png" alt="BugMed Labs Logo" width={32} height={32} className="h-8 w-8 text-primary" data-ai-hint="logo bug" />
          <span className="text-xl font-bold text-primary">BugMed Labs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {currentNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-neutral-400"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:flex bg-cyan-400 text-background hover:bg-cyan-500">
                <Link href="/invest"><DollarSign className="h-4 w-4 mr-2" />{T.invest}</Link>
            </Button>
            <Button asChild size="sm" className="hidden md:flex bg-primary/20 text-primary hover:bg-primary/30">
                <Link href="/donate"><Heart className="h-4 w-4 mr-2" />{T.donate}</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden md:flex border-primary/30 text-primary hover:bg-primary/10">
              <Link href="/contact">{T.contact}</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-primary/30 text-primary hover:bg-primary/10">
                  <Languages className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-secondary border-border">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="focus:bg-accent">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')} className="focus:bg-accent">
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-primary/30 text-primary hover:bg-primary/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">{T.openMenu}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm bg-background/95 p-6">
                  <SheetHeader>
                    <SheetTitle className="sr-only">{T.mobileMenuTitle}</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                       <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                          <Image src="/logo.png" alt="BugMed Labs Logo" width={28} height={28} data-ai-hint="logo bug"/>
                          <span className="text-lg font-bold text-primary">BugMed Labs</span>
                        </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                    <nav className="flex flex-col gap-6">
                      {currentNavLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "text-xl font-medium transition-colors hover:text-primary",
                             pathname === link.href ? "text-primary" : "text-neutral-300"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                       <Link
                          href="/invest"
                          className="text-xl font-medium text-neutral-300 transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {T.invest}
                        </Link>
                       <Link
                          href="/donate"
                          className="text-xl font-medium text-neutral-300 transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {T.donate}
                        </Link>
                      <Link
                          href="/contact"
                          className="text-xl font-medium text-neutral-300 transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {T.contact}
                        </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}

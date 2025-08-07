"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/contact/actions";
import { useState, useTransition, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const formSchemaEn = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const formSchemaAr = z.object({
  name: z.string().min(2, { message: "يجب أن يتكون الاسم من حرفين على الأقل." }),
  email: z.string().email({ message: "الرجاء إدخال عنوان بريد إلكتروني صالح." }),
  subject: z.string().min(5, { message: "يجب أن يتكون الموضوع من 5 أحرف على الأقل." }),
  message: z.string().min(10, { message: "يجب أن تتكون الرسالة من 10 أحرف على الأقل." }),
});

const translations = {
  en: {
    fullName: "Full Name",
    namePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "your.email@example.com",
    subject: "Subject",
    subjectPlaceholder: "Partnership Inquiry",
    message: "Message",
    messagePlaceholder: "Tell us how we can help",
    submitButton: "Send Message",
    successTitle: "Success!",
    errorTitle: "Something went wrong.",
    loading: "Sending...",
  },
  ar: {
    fullName: "الاسم الكامل",
    namePlaceholder: "تامر ياسر",
    email: "البريد الإلكتروني",
    emailPlaceholder: "your.email@example.com",
    subject: "الموضوع",
    subjectPlaceholder: "استفسار عن شراكة",
    message: "الرسالة",
    messagePlaceholder: "أخبرنا كيف يمكننا المساعدة",
    submitButton: "إرسال الرسالة",
    successTitle: "نجاح!",
    errorTitle: "حدث خطأ ما.",
    loading: "جار الإرسال...",
  }
}

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const { language, t } = useLanguage();
  
  const T = t(translations);
  const formSchema = language === 'ar' ? formSchemaAr : formSchemaEn;
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    context: {
        language
    }
  });

  useEffect(() => {
    form.reset();
  }, [language, form]);


  function onSubmit(data: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(data, language);
      if (result.success) {
        toast({
          title: T.successTitle,
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: T.errorTitle,
          description: result.message,
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{T.fullName}</FormLabel>
              <FormControl>
                <Input placeholder={T.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{T.email}</FormLabel>
              <FormControl>
                <Input placeholder={T.emailPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{T.subject}</FormLabel>
              <FormControl>
                <Input placeholder={T.subjectPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{T.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={T.messagePlaceholder}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {T.loading}
              </>
          ) : (
             T.submitButton
          )
          }
        </Button>
      </form>
    </Form>
  );
}

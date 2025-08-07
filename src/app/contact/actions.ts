
"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

const successMessages = {
  en: "Thank you for your message! We will get back to you shortly.",
  ar: "شكرا لرسالتك! سوف نعود اليكم قريبا."
}

const errorMessages = {
  en: "An error occurred while sending your message. Please try again.",
  ar: "حدث خطأ أثناء إرسال رسالتك. الرجاء معاودة المحاولة في وقت لاحق."
}

export async function submitContactForm(formData: unknown, lang: 'en' | 'ar') {
  const contactFormSchema = lang === 'ar' ? formSchemaAr : formSchemaEn;
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    const validationErrors = validatedFields.error.flatten().fieldErrors;
    const firstErrorMessage = Object.values(validationErrors)[0]?.[0] || (lang === 'ar' ? 'بيانات النموذج غير صالحة.' : 'Invalid form data.');
    
    return {
      success: false,
      message: firstErrorMessage,
      errors: validationErrors,
    };
  }

  try {
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return {
      success: true,
      message: successMessages[lang],
    };
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      success: false,
      message: errorMessages[lang],
    };
  }
}

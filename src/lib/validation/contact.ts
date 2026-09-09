import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Zadajte prosím vaše meno."),
  email: z.email("Zadajte platnú e-mailovú adresu."),
  company: z.string().optional(),
  message: z.string().min(10, "Správa musí mať aspoň 10 znakov."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

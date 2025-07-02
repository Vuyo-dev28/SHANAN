"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  try {
    const validatedData = contactFormSchema.parse(data);
    console.log("Contact form submitted:", validatedData);
    // In a real application, you would integrate with an email service,
    // ticketing system, or database here.
    return { success: true, message: "Thank you for your message. We will get back to you shortly." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "There was an error sending your message. Please try again." };
  }
}

const suggestionFormSchema = z.object({
  email: z.string().email().optional().or(z.literal('')),
  suggestion: z.string().min(10),
});

export async function submitSuggestionForm(data: z.infer<typeof suggestionFormSchema>) {
    try {
        const validatedData = suggestionFormSchema.parse(data);
        console.log("Content suggestion submitted:", validatedData);
        // Here is where you would call the AI flow to process the suggestion.
        // For example: `await run(contentSuggestionFlow, validatedData.suggestion);`
        return { success: true, message: "Thank you for your suggestion! We value your feedback." };
    } catch (error) {
        console.error("Error submitting suggestion form:", error);
        return { success: false, message: "There was an error submitting your suggestion. Please try again." };
    }
}

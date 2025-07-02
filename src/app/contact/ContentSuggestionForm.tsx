"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitSuggestionForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal('')),
  suggestion: z.string().min(10, "Suggestion must be at least 10 characters long.").max(1000, "Suggestion must be less than 1000 characters."),
});

export default function ContentSuggestionForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      suggestion: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitSuggestionForm(values);
    if (result.success) {
      toast({
        title: "Suggestion Received!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: result.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Suggest New Content or Resources</CardTitle>
        <CardDescription>
          Help us improve. If there's a topic you'd like to learn more about or a resource you think we should offer, let us know!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="suggestion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Suggestion</FormLabel>
                  <FormControl>
                    <Textarea placeholder="I'd like to see more information about..." className="min-h-[150px]" {...field} />
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
                  <FormLabel>Your Email (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Submit Suggestion"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

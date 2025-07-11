import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "./ContactForm";
import ContentSuggestionForm from "./ContentSuggestionForm";
import { HelpCircle, Lightbulb } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help and listen. Whether you need support or have an idea to share, we want to hear from you.
          </p>
        </div>
        
        <Tabs defaultValue="help" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="help">
              <HelpCircle className="mr-2 h-4 w-4" />
              Get Help / Inquiry
            </TabsTrigger>
            <TabsTrigger value="suggest">
              <Lightbulb className="mr-2 h-4 w-4" />
              Suggest Content
            </TabsTrigger>
          </TabsList>
          <TabsContent value="help">
            <ContactForm />
          </TabsContent>
          <TabsContent value="suggest">
            <ContentSuggestionForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

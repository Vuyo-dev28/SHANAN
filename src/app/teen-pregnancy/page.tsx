import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Baby } from "lucide-react";

export default function TeenPregnancyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <div className="inline-block bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
              <Baby className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Teen Pregnancy Resources
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Empowering young parents with the knowledge, skills, and support to build bright futures for themselves and their children.
            </p>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/1200x500.png"
              alt="Young mother holding her baby"
              data-ai-hint="young mother"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </Card>

          <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Our Approach</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                      <p>We provide a compassionate and non-judgmental space for pregnant and parenting teens. Our approach is to empower, not to stigmatize. We believe that with the right support, young parents can overcome challenges and create stable, loving families.</p>
                      <p>Our programs focus on health, education, and personal development, ensuring both parent and child have the tools they need to succeed.</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">What We Offer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Prenatal and postnatal health education and support.</li>
                          <li>Parenting skills workshops and peer support groups.</li>
                          <li>Assistance with continuing education and career development.</li>
                          <li>Access to childcare and essential baby supplies.</li>
                          <li>One-on-one mentorship and counseling services.</li>
                      </ul>
                      <Button asChild className="mt-4" variant="default">
                          <Link href="/contact">Access Resources</Link>
                      </Button>
                  </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

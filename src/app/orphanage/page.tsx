import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function OrphanageSupportPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
             <div className="inline-block bg-red-100 text-red-600 p-4 rounded-full mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Orphanage Homes Support
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Providing a safe, nurturing, and supportive environment for every child to thrive.
            </p>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1610998533895-7164a63205b3?w=1200&h=500&fit=crop&auto=format"
              alt="South African children playing soccer in a township"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
              data-ai-hint="children playing"
            />
          </Card>

          <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                      <p>Our commitment is to ensure that every child living in an orphanage receives the love, care, and opportunities they deserve. We work tirelessly to transform these institutions into true homes where children can feel safe, valued, and empowered.</p>
                      <p>We believe that a stable and supportive environment is crucial for a child's development. Our programs focus on holistic well-being, addressing not just physical needs but also emotional, social, and educational development.</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">How We Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Providing essential supplies like food, clothing, and educational materials.</li>
                          <li>Renovating and improving living conditions and infrastructure.</li>
                          <li>Offering educational scholarships and vocational training for older children.</li>
                          <li>Organizing mentorship programs and recreational activities to foster growth.</li>
                          <li>Providing counseling and emotional support for both children and staff.</li>
                      </ul>
                      <Button asChild className="mt-4" variant="default">
                          <Link href="/get-involved">Support Our Work</Link>
                      </Button>
                  </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

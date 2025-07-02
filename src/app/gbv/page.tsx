import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function GBVAwarenessPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Gender-Based Violence Awareness
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Standing together to create a world free from violence and fear.
            </p>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1579548122214-c18898b3a436?q=80&w=1200&h=500&fit=crop&auto=format"
              alt="A person being comforted"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </Card>

          <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Our Stance Against GBV</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                      <p>Gender-Based Violence is a violation of human rights. We are dedicated to eradicating it through education, advocacy, and direct support for survivors. Our goal is to foster a society where everyone, regardless of gender, can live in safety and with dignity.</p>
                      <p>We work with communities to challenge harmful norms and stereotypes that perpetuate violence. By raising awareness and providing resources, we empower individuals to become agents of change.</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Support and Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Confidential counseling and trauma support for survivors.</li>
                          <li>Safe houses and emergency shelters for those in immediate danger.</li>
                          <li>Legal aid and assistance to help survivors navigate the justice system.</li>
                          <li>Awareness campaigns and workshops in schools and communities.</li>
                          <li>Economic empowerment programs to help survivors regain independence.</li>
                      </ul>
                      <Button asChild className="mt-4" variant="destructive">
                          <Link href="/contact">Get Help Now</Link>
                      </Button>
                  </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpingHand } from "lucide-react";

export default function SubstanceAbusePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <div className="inline-block bg-green-100 text-green-600 p-4 rounded-full mb-4">
              <HelpingHand className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Substance Abuse Awareness
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A guiding hand on the path to recovery. You are not alone.
            </p>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/1200x500.png"
              alt="Support group session"
              data-ai-hint="support group"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </Card>

          <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">A Path to Healing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                      <p>We understand that addiction is a complex disease, not a moral failing. Our programs are built on a foundation of compassion, respect, and evidence-based practices to support individuals and families affected by substance abuse.</p>
                      <p>Our aim is to provide a comprehensive support system that addresses the physical, mental, and emotional aspects of recovery, helping individuals to reclaim their lives and build a hopeful future.</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Our Recovery Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Confidential one-on-one and group counseling sessions.</li>
                          <li>Referrals to detoxification and rehabilitation centers.</li>
                          <li>Peer support networks led by individuals in recovery.</li>
                          <li>Family support programs to help heal relationships.</li>
                          <li>Life skills training to support long-term sobriety and independence.</li>
                      </ul>
                      <Button asChild className="mt-4" variant="default">
                          <Link href="/contact">Seek Support</Link>
                      </Button>
                  </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

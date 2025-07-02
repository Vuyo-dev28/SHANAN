import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Briefcase, ArrowRight } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Join Us in Making a Difference
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your support is vital to our mission. Discover how you can contribute to creating brighter futures for those in need.
          </p>
        </div>

        <div className="space-y-16">
          <Card id="donate" className="w-full flex flex-col md:flex-row items-center overflow-hidden shadow-lg">
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium mb-4">
                <DollarSign className="h-4 w-4" />
                Donate
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary">Give the Gift of Hope</h2>
              <p className="mt-4 text-muted-foreground">
                Every donation, no matter the size, has a profound impact. Your financial support helps us provide essential resources, from safe shelter and nutritious food to educational materials and counseling services. Contribute today and become a beacon of hope for someone in need.
              </p>
              <Button size="lg" className="mt-6">
                Donate Securely <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1604594411138-75177a7657a7?q=80&w=600&h=450&fit=crop&auto=format"
                alt="Hands holding South African Rand coins"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint="donate money"
              />
            </div>
          </Card>

          <Card id="volunteer" className="w-full flex flex-col md:flex-row-reverse items-center overflow-hidden shadow-lg">
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4">
                <Users className="h-4 w-4" />
                Volunteer
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary">Lend Your Time and Talent</h2>
              <p className="mt-4 text-muted-foreground">
                Our volunteers are the backbone of our organization. By giving your time, you can directly impact the lives of those we serve. We have a variety of opportunities, from mentoring and tutoring to event support and administrative help.
              </p>
               <Button size="lg" variant="outline" className="mt-6" asChild>
                 <Link href="/contact">
                    Become a Volunteer <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1618204116909-c48734645a27?q=80&w=600&h=450&fit=crop&auto=format"
                alt="A group of diverse volunteers in South Africa smiling"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint="volunteers south africa"
              />
            </div>
          </Card>

          <Card id="partner" className="w-full flex flex-col md:flex-row items-center overflow-hidden shadow-lg">
            <div className="md:w-1/2 p-8 lg:p-12">
               <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-medium mb-4">
                <Briefcase className="h-4 w-4" />
                Partner
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary">Corporate Partnerships</h2>
              <p className="mt-4 text-muted-foreground">
                Join forces with Beacon of Hope to amplify your company's social impact. We collaborate with businesses on customized partnership programs, including event sponsorships, employee giving campaigns, and in-kind donations.
              </p>
              <Button size="lg" variant="outline" className="mt-6" asChild>
                 <Link href="/contact">
                    Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
               <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&h=450&fit=crop&auto=format"
                alt="A diverse group of professionals collaborating in a modern office"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint="business meeting"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

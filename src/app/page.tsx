import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Baby, HelpingHand, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const focusAreas = [
  {
    icon: Heart,
    title: "Orphanage Support",
    description: "Providing safe, nurturing homes and educational opportunities for children.",
    href: "/orphanage",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Shield,
    title: "GBV Awareness",
    description: "Fighting against gender-based violence through awareness and support services.",
    href: "/gbv",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Baby,
    title: "Teen Pregnancy",
    description: "Offering resources and guidance for young mothers and families.",
    href: "/teen-pregnancy",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: HelpingHand,
    title: "Substance Abuse",
    description: "Supporting individuals on their journey to recovery from substance abuse.",
    href: "/substance-abuse",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "Donor",
    avatar: "https://placehold.co/100x100.png",
    testimonial: "Beacon of Hope is making a real difference. Their transparency and dedication are why I continue to support their cause. I've seen firsthand the positive impact they have on children's lives.",
  },
  {
    name: "John Smith",
    role: "Volunteer",
    avatar: "https://placehold.co/100x100.png",
    testimonial: "Volunteering here has been a life-changing experience. The organization is incredibly well-run, and you can truly see the impact of your work on the community. It's more than just help; it's about building futures.",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="South African children smiling with colorful painted hands"
          fill
          className="object-cover"
          data-ai-hint="children south africa"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Lighting the Path to a Brighter Future
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Beacon of Hope is dedicated to empowering vulnerable populations through compassionate support, resources, and advocacy.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/get-involved">Get Involved <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section id="focus" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Focus Areas</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We channel our efforts into four key areas to create sustainable, positive change in our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area) => (
              <Card key={area.title} className="text-center group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${area.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className={`w-8 h-8 ${area.color}`} />
                  </div>
                  <CardTitle className="pt-4 font-headline">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                  <Button variant="link" asChild className="mt-4 text-primary">
                    <Link href={area.href}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Mission</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        At Beacon of Hope, our mission is to provide comprehensive support to the most vulnerable members of society. We believe in creating a world where everyone has the opportunity to thrive, free from violence, and with access to the resources they need for a healthy and productive life. We are committed to fostering environments of safety, growth, and empowerment.
                    </p>
                    <Button asChild className="mt-6" variant="outline">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="https://placehold.co/600x400.png" 
                      alt="Diverse group of South African community members" 
                      width={600} 
                      height={400} 
                      className="w-full object-cover"
                      data-ai-hint="community south africa" 
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Voices of Our Community</h2>
             <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              The stories of those we've touched and those who have joined our cause.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground italic">&quot;{testimonial.testimonial}&quot;</p>
                  <div className="mt-4 font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Your contribution can change lives. Join us in our mission to spread hope and support those in need.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-involved#donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/get-involved#volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

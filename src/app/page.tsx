import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  HeartHandshake, 
  Shield, 
  Lightbulb, 
  Users2, 
  Baby, 
  Laptop,
  ArrowRight,
  BarChart,
  User,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const keyActivities = [
  {
    icon: BookOpen,
    title: "Religious Studies",
    description: "In-depth Bible studies to build a strong spiritual foundation.",
    href: "/#",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    title: "Youth Programs",
    description: "Engaging holiday programs and mentorship for young people.",
    href: "/#",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: HeartHandshake,
    title: "Community Care",
    description: "Providing support and care for homeless individuals.",
    href: "/orphanage",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Health Awareness",
    description: "Education on HIV/AIDS and Gender-Based Violence.",
    href: "/gbv",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "Developing skills for self-employment and economic independence.",
    href: "/#",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Users2,
    title: "Fellowship Groups",
    description: "Dedicated fellowship for both men and women to grow together.",
    href: "/#",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Baby,
    title: "Children Ministry",
    description: "Nurturing the youngest members of our community.",
    href: "/teen-pregnancy",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Laptop,
    title: "Computer Skills",
    description: "Providing essential digital literacy for the modern world.",
    href: "/#",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "Donor",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    testimonial: "SHANAN is making a real difference. Their transparency and dedication are why I continue to support their cause. I've seen firsthand the positive impact they have on people's lives.",
  },
  {
    name: "John Smith",
    role: "Volunteer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    testimonial: "Volunteering here has been a life-changing experience. The organization is incredibly well-run, and you can truly see the impact of your work on the community. It's more than just help; it's about building futures.",
  },
];

const stats = [
    {
        icon: MapPin,
        value: "1 Million",
        label: "Approx. Population in Alexandra",
    },
    {
        icon: User,
        value: "73%",
        label: "Youth Population",
    },
    {
        icon: BarChart,
        value: "60%",
        label: "Unofficial Unemployment Rate",
    },
]


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1611082194692-9c6091448654?q=80&w=1920&h=1080&fit=crop&auto=format"
          alt="A vibrant street scene in Alexandra, Johannesburg"
          fill
          className="object-cover"
          data-ai-hint="alexandra township"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Empowering Alexandra, One Life at a Time
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            SHANAN provides holistic community development, life skills, and Christian programs to uplift the youth and adults of Alexandra.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/get-involved">Get Involved <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1588202353352-936c535693b8?w=600&h=400&fit=crop&auto=format" 
                      alt="The skyline of Sandton next to Alexandra" 
                      width={600} 
                      height={400} 
                      className="w-full object-cover"
                      data-ai-hint="sandton skyline" 
                    />
                </div>
                 <div>
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Welcome to Alexandra</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Alexandra, a township in the north of Johannesburg, is the poor cousin of Sandton, the richest square mile in Africa. It is a microcosm of South Africa, facing immense challenges like unemployment, Gender-Based Violence, HIV & AIDS, teenage pregnancy, and substance abuse. With over 60% of its ~1 million residents under 23, the need for skills development and hope is critical.
                    </p>
                </div>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">About SHANAN</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                 SHANAN is a Christian and life skills approach organization that uses a variety of networking skills methodologies to empower, train, educate and mobilize communities. We help in training youth and adults through holistic community development networking skills which includes Christian programs. Our life skills programmes take place in various settings including NGOs, Churches, and other community facilities. 
            </p>
        </div>
      </section>

       <section id="mission" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                  <Card className="shadow-lg">
                      <CardHeader>
                          <CardTitle className="font-headline text-2xl text-primary">Our Vision</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                              <li>Work with Faith-based community organizations in South Africa in different sectors that will help people to have basic life skills that are mostly needed in life.</li>
                              <li>To have Christians that are self-employed and well informed in the word of God and life skills, be able to mentor the next generation.</li>
                          </ul>
                      </CardContent>
                  </Card>
                   <Card className="shadow-lg">
                      <CardHeader>
                          <CardTitle className="font-headline text-2xl text-primary">Our Mission</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                              <li>Empower communities with skills to educate and train people within historically disadvantaged communities and ultimately give them the word of God.</li>
                              <li>Uplifting Township communities and eradicating poverty, so people can become self-sustainable, and communities can truly be economically independent. Our programs have emphasized on youth and adults.</li>
                          </ul>
                      </CardContent>
                  </Card>
              </div>
          </div>
       </section>
      
      <section id="focus" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Key Activities</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We focus on these key areas to create sustainable, positive change in Alexandra.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {keyActivities.map((area) => (
              <Card key={area.title} className="text-center group hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${area.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className={`w-8 h-8 ${area.color}`} />
                  </div>
                  <CardTitle className="pt-4 font-headline">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">The Alexandra Context</h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                  Understanding the community we serve is key to our mission. These statistics highlight the challenges and opportunities in Alexandra.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                  <Card key={stat.label} className="text-center p-6">
                      <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-blue-50 text-blue-500 mb-4">
                          <stat.icon className="w-8 h-8" />
                      </div>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                  </Card>
              ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Demographics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                      <p><b>Population:</b> Mainly Black (87%), with small minorities of Indians (11%) and Coloureds (1%).</p>
                      <p><b>Age:</b> Extremely young, with 70% of residents under 35 and an average age of 23.</p>
                      <p><b>Density:</b> One of the most densely populated areas in the country, reaching up to 770 people per hectare in some parts.</p>
                  </CardContent>
              </Card>
               <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Local Income</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                      <p><b>Unemployment:</b> Official figures at 32%, but unofficial estimates are closer to 60%.</p>
                      <p><b>Gender Disparity:</b> Unemployment is significantly higher among women (40%) compared to men (19%).</p>
                      <p><b>Challenges:</b> High population turnover and informal settlements make precise data collection difficult.</p>
                  </CardContent>
              </Card>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-white">
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

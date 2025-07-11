'use client';

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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const keyActivities = [
  {
    icon: BookOpen,
    title: "Religious Studies",
    description: "In-depth Bible studies to build a strong spiritual foundation.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    title: "Youth Programs",
    description: "Engaging holiday programs and mentorship for young people.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: HeartHandshake,
    title: "Community Care",
    description: "Providing support and care for homeless individuals.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Health Awareness",
    description: "Education on HIV/AIDS and Gender-Based Violence.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "Developing skills for self-employment and economic independence.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Users2,
    title: "Fellowship Groups",
    description: "Dedicated fellowship for both men and women to grow together.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Baby,
    title: "Children Ministry",
    description: "Nurturing the youngest members of our community.",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Laptop,
    title: "Computer Skills",
    description: "Providing essential digital literacy for the modern world.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

// const testimonials = [
//   {
//     name: "Jane Doe",
//     role: "Donor",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     testimonial:
//       "SHANAN is making a real difference. Their transparency and dedication are why I continue to support their cause.",
//   },
//   {
//     name: "John Smith",
//     role: "Volunteer",
//     avatar: "https://randomuser.me/api/portraits/men/45.jpg",
//     testimonial:
//       "Volunteering here has been a life-changing experience. It's more than just help; it's about building futures.",
//   },
// ];

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
];

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/banner1.png"
          alt="A vibrant street scene in Alexandra"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-headline font-bold tracking-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
          >
            Empowering Alexandra, One Life at a Time
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg md:text-xl"
            variants={fadeInUp}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            SHANAN provides holistic community development and Christian programs to uplift Alexandra.
          </motion.p>
          <motion.div variants={fadeInUp} custom={2} initial="hidden" animate="visible">
            <Button asChild size="lg" className="mt-8">
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <Image src="/images/banner2.png" alt="Sandton skyline" width={600} height={400} className="w-full object-cover" />
          </motion.div>
          <motion.div variants={fadeInUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-headline font-bold text-primary">Welcome to SHANAN</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We use life skills and Christian training to uplift disadvantaged communities, with a special focus on youth empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Activities */}
      <section id="focus" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-headline font-bold text-primary mb-6">Our Key Activities</h2>
          <p className="max-w-3xl mx-auto mb-12 text-muted-foreground">
            We focus on these areas to bring sustainable transformation to Alexandra.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {keyActivities.map((area, i) => (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${area.bgColor}`}>
                      <area.icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    <CardTitle className="pt-4 font-headline">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Demographics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-primary">The Alexandra Context</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Understanding the community we serve is key to our mission. These statistics highlight the challenges and opportunities in Alexandra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeInUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-headline font-bold text-primary mb-6">Voices of Our Community</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            The stories of those we've touched and those who have joined our cause.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div key={testimonial.name} variants={fadeInUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-6 text-center">
                  <CardContent>
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="text-muted-foreground italic">“{testimonial.testimonial}”</p>
                    <div className="mt-4 font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

   {/* Call to Action */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold">Ready to Make a Difference?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Your contribution can change lives. Join us in our mission to spread hope and support those in need.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-involved#donate">Donate Now</Link>
          </Button>
          <Button
            size="lg"
            className="bg-gray-200 text-primary hover:bg-gray-300"
            asChild
          >
            <Link href="/get-involved#volunteer">Volunteer With Us</Link>
          </Button>
        </div>
      </div>
    </section>

    </div>
  );
}

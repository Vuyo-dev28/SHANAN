'use client';

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, BookOpen, Globe, Activity, HelpingHand, MapPin, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function OrphanageSupportPage() {
  return (
    <div className="relative bg-background">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner1.png"
          alt="Background texture"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="space-y-16" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          
          {/* Hero Section */}
          <motion.div className="text-center space-y-6" variants={fadeUp} custom={1}>
            <div className="inline-flex items-center justify-center bg-red-100 text-red-600 p-4 rounded-full shadow-md">
              <Heart className="w-8 h-8 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-primary tracking-tight">
              Our Dedicated Work
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Providing a safe, nurturing, and supportive environment for every person to thrive.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={fadeUp} custom={2}>
            <Card className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/banner1.png"
                alt="South African children playing soccer in a township"
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
              />
            </Card>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cards.map((card, i) => (
              <motion.div key={card.title} variants={fadeUp} custom={i}>
                <InfoCard title={card.title} Icon={card.icon} image={card.image}>
                  {card.content}
                </InfoCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center pt-12 space-y-6" variants={fadeUp} custom={cards.length + 1}>
            <p className="italic text-muted-foreground text-lg">
              “Train up a child in the way he should go: and when he is old, he will not depart from it.” – Proverbs 22:6
            </p>
            <Button asChild className="text-lg px-8 py-4 animate-bounce hover:animate-none">
              <Link href="/get-involved">Support Our Mission</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// 🔁 InfoCard component with side image/icon
function InfoCard({
  title,
  children,
  Icon,
  image
}: {
  title: string;
  children: React.ReactNode;
  Icon: React.ElementType;
  image?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col justify-between h-full overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 group">
        {/* Image with icon overlay */}
        {image && (
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={`${title} image`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        )}

        {/* Header & Content */}
        <div className="p-4 flex flex-col gap-2 flex-grow">
          <CardHeader className="px-0 pt-0 pb-1">
            <CardTitle className="font-headline text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground px-0 pb-0">
            {children}
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}



function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// 📦 Card data
const cards = [
  {
    title: "Feeding & Care Drives",
    icon: HelpingHand,
    image: "/images/picture8.jpg",
    content: (
      <>
        <p>
          Weekly outreach to provide food, hygiene kits, and counseling to homeless individuals and families in Alexandra and surrounding areas.
        </p>
        <BulletList items={[
          "Over 1,000 meals served monthly",
          "Partnerships with local vendors & NGOs",
          "Mobile health checkups included"
        ]} />
      </>
    ),
  },
  {
    title: "Youth Empowerment Bootcamps",
    icon: Users,
    image: "/images/banner2.png",
    content: (
      <>
        <p>
          Multi-week training camps focusing on life skills, leadership, faith development, and career exposure for township youth.
        </p>
        <BulletList items={[
          "Ages 13–25 engaged",
          "Topics: identity, job readiness, peer mentorship",
          "Includes sports & creative arts"
        ]} />
      </>
    ),
  },
  {
    title: "Community Healing Forums",
    icon: Globe,
    image: "/images/picture10.jpg",
    content: (
      <>
        <p>
          Group discussions held in churches and halls addressing trauma, GBV, substance abuse, and family restoration using biblical principles.
        </p>
        <BulletList items={[
          "Safe space for women and men",
          "Led by trained facilitators & pastors",
          "Includes prayer & peer support"
        ]} />
      </>
    ),
  },
  {
    title: "Entrepreneurship Training",
    icon: Activity,
    image: "/images/picture26.jpg",
    content: (
      <>
        <p>
          Empowering locals with basic business, financial literacy, and digital skills to promote self-sufficiency.
        </p>
        <BulletList items={[
          "Intro to budgeting & micro-enterprise",
          "Computer literacy classes",
          "Pitch events with local business leaders"
        ]} />
      </>
    ),
  },
  {
    title: "Children’s Outreach & Clubs",
    icon: BookOpen,
    image: "/images/picture7.jpg",
    content: (
      <>
        <p>
          Weekly kids clubs with Bible stories, music, play therapy, and meals for children in underserved communities.
        </p>
        <BulletList items={[
          "Over 200 children weekly",
          "Storytelling, games, and crafts",
          "Parental support and follow-up"
        ]} />
      </>
    ),
  },
  {
    title: "Holiday Camps & Bible School",
    icon: UserCheck,
    image: "/images/picture25.jpg",
    content: (
      <>
        <p>
          During school holidays, SHANAN runs full-day camps focused on fun, safety, and spiritual growth.
        </p>
        <BulletList items={[
          "5-day themed camps",
          "Faith-based curriculum",
          "Field trips and meals provided"
        ]} />
      </>
    ),
  },
  {
    title: "Men’s & Women’s Ministry",
    icon: Users,
    image: "/images/picture12.jpg",
    content: (
      <>
        <p>
          Separate fellowship spaces for men and women to learn, grow, and be equipped as spiritual leaders in their homes and communities.
        </p>
        <BulletList items={[
          "Monthly Bible studies and retreats",
          "Topics: marriage, identity, purpose",
          "Mentorship circles"
        ]} />
      </>
    ),
  }
];


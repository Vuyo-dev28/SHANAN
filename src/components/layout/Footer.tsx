import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

const footerLinks = [
    { title: "About Us", links: [{label: "Our Mission", href:"/#mission"}, {label: "Contact Us", href:"/contact"}] },
    { title: "Our Work", links: [{label: "Orphanage Support", href:"/orphanage"}, {label: "GBV Awareness", href:"/gbv"}, {label: "Teen Pregnancy", href:"/teen-pregnancy"}, {label: "Substance Abuse", href:"/substance-abuse"}] },
    { title: "Get Involved", links: [{label: "Donate", href:"/get-involved#donate"}, {label: "Volunteer", href:"/get-involved#volunteer"}] },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
                <Logo />
                <p className="text-muted-foreground max-w-xs">
                    SHANAN is a Christian and life skills organization empowering communities through holistic development.
                </p>
                <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                        <Button key={social.name} variant="ghost" size="icon" asChild>
                            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <social.icon className="h-5 w-5" />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
            
            {footerLinks.map(section => (
                 <div key={section.title}>
                    <h3 className="font-semibold text-primary">{section.title}</h3>
                    <ul className="mt-4 space-y-2">
                        {section.links.map(link => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SHANAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

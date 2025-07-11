import { Sunrise } from 'lucide-react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo image (ensure logo.png is in /public folder) */}
      <Image
        src="/images/logo.png"
        alt="SHANAN Logo"
        width={28}
        height={28}
        className="rounded-sm"
      />
      
      {/* Icon (optional — keep for identity or styling) */}
      {/* <Sunrise className="h-7 w-7 text-primary" /> */}

      {/* Text */}
      <span className="text-xl font-bold font-headline text-primary">
        SHANAN
      </span>
    </div>
  );
}

import { Sunrise } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Sunrise className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-primary">
        Beacon of Hope
      </span>
    </div>
  );
}

import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="rounded-full bg-white p-1">
        <Image src="/spooky.svg" alt="Gamehub" height="80" width="80" />
      </div>
      <div className={cn('flex flex-col items-center', poppins.className)}>
        <p className="text-xl font-semibold">Streaming service</p>
        <p className="text-sm text-muted-foreground">Let&apos;s play</p>
      </div>
    </div>
  );
};

export default Logo;

import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 transition hover:opacity-75">
        <div className="mr-12 shrink-0 rounded-full bg-white p-1 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" alt="Gamehub" height="32" width="32" />
        </div>
        <div className={cn('hidden lg:block', poppins.className)}>
          <p className="text-lg font-semibold">Streaming platform</p>
          <p className="text-xs text-muted-foreground">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;

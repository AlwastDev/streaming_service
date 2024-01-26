import { FC } from 'react';
import Image from 'next/image';

import { UserAvatar } from '@/components/user-avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { LiveBadge } from '@/components/live-badge';

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail: FC<ThumbnailProps> = ({ src, fallback, username, isLive }) => {
  let content;

  if (!src) {
    content = (
      <div className="flex size-full flex-col items-center justify-center gap-y-4 rounded-md bg-background transition-transform group-hover:-translate-y-2 group-hover:translate-x-2">
        <UserAvatar size="lg" showBadge username={username} imageUrl={fallback} isLive={isLive} />
      </div>
    );
  } else {
    content = (
      <Image
        className="rounded-md object-cover transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
        src={src}
        alt="Thumbnail"
        fill
      />
    );
  }

  return (
    <div className="group relative aspect-video cursor-pointer rounded-md">
      <div className="absolute inset-0 flex items-center justify-center rounded-md bg-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
      {content}
      {isLive && src && (
        <div className="absolute left-2 top-2 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group relative aspect-video cursor-pointer rounded-xl">
      <Skeleton className="size-full" />
    </div>
  );
};

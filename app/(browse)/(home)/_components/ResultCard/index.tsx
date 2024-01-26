import { FC } from 'react';
import Link from 'next/link';
import { User } from '@prisma/client';

import { Thumbnail, ThumbnailSkeleton } from '@/components/thumbnail';
import { UserAvatar, UserAvatarSkeleton } from '@/components/user-avatar';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultCardProps {
  stream: {
    user: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
}

export const ResultCard: FC<ResultCardProps> = ({ stream }) => {
  return (
    <Link href={`/${stream.user.username}`}>
      <div className="size-full space-y-4">
        <Thumbnail
          src={stream.thumbnailUrl}
          fallback={stream.user.imageUrl}
          isLive={stream.isLive}
          username={stream.user.username}
        />
        <div className="flex gap-x-3">
          <UserAvatar username={stream.user.username} imageUrl={stream.user.imageUrl} isLive={stream.isLive} />
          <div className="flex flex-col overflow-hidden text-sm">
            <p className="truncate font-semibold hover:text-blue-500">{stream.name}</p>
            <p className="text-muted-foreground">{stream.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="size-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
};

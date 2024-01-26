import { FC } from 'react';
import Link from 'next/link';
import { User } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';

import { Thumbnail, ThumbnailSkeleton } from '@/components/thumbnail';
import { VerifiedMark } from '@/components/verified-mark';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultCardProps {
  result: {
    id: string;
    name: string;
    thumbnailUrl: string | null;
    isLive: boolean;
    updatedAt: Date;
    user: User;
  };
}

export const ResultCard: FC<ResultCardProps> = ({ result }) => {
  return (
    <Link href={`/${result.user.username}`}>
      <div className="flex w-full gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <Thumbnail
            src={result.thumbnailUrl}
            fallback={result.user.imageUrl}
            isLive={result.isLive}
            username={result.user.username}
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <p className="cursor-pointer text-lg font-bold hover:text-blue-500">{result.user.username}</p>
            <VerifiedMark />
          </div>
          <p className="text-sm text-muted-foreground">{result.name}</p>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(result.updatedAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="flex w-full gap-x-4">
      <div className="relative h-[9rem] w-[16rem]">
        <ThumbnailSkeleton />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
};

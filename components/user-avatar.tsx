import { FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import LiveBadge from '@/components/live-badge';
import { avatarSizes } from '@/lib/avatar-sizes';
import { Skeleton } from '@/components/ui/skeleton';

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({ username, imageUrl, isLive, showBadge, size }) => {
  const canShowBadge = showBadge && isLive;

  return (
    <div className="relative">
      <Avatar className={cn(isLive && 'ring-2 ring-rose-500 border border-background', avatarSizes({ size }))}>
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          {username[0]} {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton: FC<UserAvatarSkeletonProps> = ({ size }) => {
  return <Skeleton className={cn('rounded-full', avatarSizes({ size }))}></Skeleton>;
};

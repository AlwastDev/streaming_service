'use client';

import { FC } from 'react';
import { Follow, User } from '@prisma/client';

import { useSidebar } from '@/store/use-sidebar';
import { UserItem, UserItemSkeleton } from '../UserItem';

interface FollowedProps {
  followers: (Follow & { following: User })[];
}

export const Followed: FC<FollowedProps> = ({ followers }) => {
  const { collapsed } = useSidebar((state) => state);

  if (!followers.length) {
    return null;
  }

  return (
    <div>
      {!collapsed && (
        <div className="mb-4 pl-6">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {followers.map((follower) => (
          <li key={follower.following.id}>
            <UserItem username={follower.following.username} imageUrl={follower.following.imageUrl} isLive={true} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FollowedSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={`${i}_skeletonFollower`} />
      ))}
    </ul>
  );
};

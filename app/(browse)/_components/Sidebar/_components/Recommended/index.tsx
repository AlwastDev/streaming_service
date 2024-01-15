'use client';

import { FC } from 'react';
import { User } from '@prisma/client';
import { useSidebar } from '@/store/use-sidebar';

import { UserItem, UserItemSkeleton } from '../UserItem';

interface RecommendedProps {
  users: User[];
}

export const Recommended: FC<RecommendedProps> = ({ users }) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && users.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="mb-4 pl-6">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {users.map((user) => (
          <li key={user.id}>
            <UserItem username={user.username} imageUrl={user.imageUrl} isLive={true} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={`${i}_skeletonItem`} />
      ))}
    </ul>
  );
};

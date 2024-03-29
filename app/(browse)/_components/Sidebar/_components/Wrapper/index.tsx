'use client';

import React, { FC } from 'react';
import { useIsClient } from 'usehooks-ts';

import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';
import { ToggleSkeleton } from '../Toggle';
import { RecommendedSkeleton } from '../Recommended';
import { FollowedSkeleton } from '../Followed';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D2E35] bg-background lg:w-60">
        <ToggleSkeleton />
        <FollowedSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50',
        collapsed && 'w-[70px]',
      )}
    >
      {children}
    </aside>
  );
};

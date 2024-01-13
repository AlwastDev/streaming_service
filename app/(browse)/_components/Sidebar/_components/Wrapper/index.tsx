'use client';

import React, { FC } from 'react';
import { useIsClient } from 'usehooks-ts';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';
import { ToggleSkeleton } from '../Toggle';
import { RecommendedSkeleton } from '../Recommended';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D3E35] bg-background lg:w-60">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 z-50 flex h-full w-60 flex-col border-r border-[#2D3E35] bg-background',
        collapsed && 'w-[70px]',
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;

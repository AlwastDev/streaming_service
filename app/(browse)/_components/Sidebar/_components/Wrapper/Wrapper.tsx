'use client';
import React, { FC } from 'react';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useSidebar((state) => state);

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

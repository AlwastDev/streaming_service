'use client';

import React, { FC, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { useCreatorSidebar } from '@/store/use-creator-sidebar';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  const { collapsed, onCollapse, onExpand } = useCreatorSidebar((state) => state);
  const matches = useMediaQuery(`(max-width: 1024px)`);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return <div className={cn('flex-1', collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}>{children}</div>;
};

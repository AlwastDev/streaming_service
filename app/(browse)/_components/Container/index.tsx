'use client';

import React, { FC, useEffect } from 'react';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const matches = useMediaQuery('(max-width: 1024px)');
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onExpand, onCollapse]);

  return <div className={cn('flex-1', collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}>{children}</div>;
};

export default Container;

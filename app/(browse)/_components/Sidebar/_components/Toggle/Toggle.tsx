'use client';

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useSidebar } from '@/store/use-sidebar';
import { Button } from '@/components/ui/button';
import Hint from '@/components/hint';

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar();

  const label = collapsed ? 'Expand' : 'Collapse';

  return (
    <>
      {collapsed && (
        <div className="mb-4 hidden w-full items-center justify-center pt-4 lg:flex">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="mb-2 flex w-full items-center p-3 pl-6">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button onClick={onCollapse} className="ml-auto h-auto p-2" variant="ghost">
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;

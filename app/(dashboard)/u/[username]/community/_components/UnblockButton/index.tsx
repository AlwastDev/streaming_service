'use client';

import { toast } from 'sonner';
import { FC, useTransition } from 'react';

import { onUnblock } from '@/actions/block';
import { Button } from '@/components/ui/button';

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton: FC<UnblockButtonProps> = ({ userId }) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) => toast.success(`User ${result.blocked.username} unblocked`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Button disabled={isPending} onClick={onClick} variant="link" size="sm" className="w-full text-blue-500">
      Unblock
    </Button>
  );
};

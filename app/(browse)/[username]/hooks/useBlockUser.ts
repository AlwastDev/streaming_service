import { useTransition } from 'react';
import { toast } from 'sonner';

import { onBlock, onUnblock } from '@/actions/block';

interface useBlockUserProps {
  userId: string;
  isBlocked: boolean;
}

export const useBlockUser = ({ userId, isBlocked }: useBlockUserProps) => {
  const [isBlockPending, startTransition] = useTransition();

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`You have blocked the user ${data.blocked.username}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => toast.success(`You have unblocked the user ${data.blocked.username}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const onClickBlock = () => {
    if (isBlocked) {
      handleUnblock();
    } else {
      handleBlock();
    }
  };

  return { isBlockPending, onClickBlock };
};

'use client';

import { FC, useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { useFollowUser } from '@/hooks/useFollowUser';
import { onBlock } from '@/actions/block';
import { toast } from 'sonner';

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions: FC<ActionsProps> = ({ isFollowing, userId }) => {
  const [isBlockPending, startTransition] = useTransition();

  const { isFollowPending, onClickFollow } = useFollowUser({ userId, isFollowing });

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`You have blocked the user ${data.blocked.username}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <>
      <Button disabled={isFollowPending} onClick={onClickFollow} variant="primary">
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      <Button disabled={isBlockPending} onClick={handleBlock}>
        Block
      </Button>
    </>
  );
};

'use client';

import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { useBlockUser } from '../../hooks/useBlockUser';
import { useFollowUser } from '../../hooks/useFollowUser';

interface ActionsProps {
  isFollowing: boolean;
  isBlocked: boolean;
  userId: string;
}

export const Actions: FC<ActionsProps> = ({ isFollowing, isBlocked, userId }) => {
  const { isBlockPending, onClickBlock } = useBlockUser({ userId, isBlocked });
  const { isFollowPending, onClickFollow } = useFollowUser({ userId, isFollowing });

  return (
    <>
      <Button disabled={isFollowPending} onClick={onClickFollow} variant="primary">
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      <Button disabled={isBlockPending} onClick={onClickBlock}>
        {isBlocked ? 'Unblock' : 'Block'}
      </Button>
    </>
  );
};

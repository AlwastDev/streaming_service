import { toast } from 'sonner';
import { useTransition } from 'react';

import { onFollow, onUnfollow } from '@/actions/follow';

interface useFollowUserProps {
  userId: string;
  isFollowing: boolean;
}

export const useFollowUser = ({ userId, isFollowing }: useFollowUserProps) => {
  const [isFollowPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const onClickFollow = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return { isFollowPending, onClickFollow };
};

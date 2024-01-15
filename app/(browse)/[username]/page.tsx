import { notFound } from 'next/navigation';

import { getUserByUsername } from '@/lib/user-service';
import { isFollowingUser } from '@/lib/follow-service';
import { Actions } from './_components/Actions';

interface UserPageProps {
  params: {
    username: string;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}

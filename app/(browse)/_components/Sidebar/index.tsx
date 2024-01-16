import { getRecommended } from '@/lib/recommended-service';
import { getFollowedUsers } from '@/lib/follow-service';

import { Wrapper } from './_components/Wrapper';
import { Toggle, ToggleSkeleton } from './_components/Toggle';
import { RecommendedSkeleton, Recommended } from './_components/Recommended';
import { Followed, FollowedSkeleton } from './_components/Followed';

export const Sidebar = async () => {
  const recommenders = await getRecommended();
  const followers = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Followed followers={followers} />
        <Recommended users={recommenders} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 z-50 flex h-full w-[70px] flex-col border-r border-[#2D2E35] bg-background lg:w-60">
      <ToggleSkeleton />
      <FollowedSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

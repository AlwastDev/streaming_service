import { StreamPlayerSkeleton } from '@/components/stream/stream-player';

export default async function CreatorLoading() {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
}

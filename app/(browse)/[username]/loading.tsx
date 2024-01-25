import { StreamPlayerSkeleton } from '@/components/stream/stream-player';

export default async function UserLoading() {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
}

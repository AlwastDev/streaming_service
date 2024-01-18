import { Skeleton } from '@/components/ui/skeleton';
import { ToggleCardSkeleton } from './_components/ToggleCard';

export default async function ChatLoading() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton className="h-10 w-[200px]" />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <ToggleCardSkeleton key={`${i}_toggleCardSkeleton`} />
        ))}
      </div>
    </div>
  );
}

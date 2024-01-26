import { getSearch } from '@/lib/search-service';
import { Skeleton } from '@/components/ui/skeleton';
import { ResultCard } from '../ResultCard';
import { ResultCardSkeleton } from '../ResultCard';

interface ResultsProps {
  term?: string;
}

export const Results = async ({ term }: ResultsProps) => {
  const results = await getSearch(term);

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Results for term &quot;{term}&quot;</h2>
      {results.length === 0 && (
        <p className="text-sm text-muted-foreground">No results found. Try searching for something else</p>
      )}
      <div className="flex flex-col gap-y-4">
        {results.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="mb-4 h-8 w-[290px]" />
      <div className="flex flex-col gap-y-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

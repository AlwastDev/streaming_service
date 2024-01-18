'use client';

import { FC, useTransition } from 'react';

import { Switch } from '@/components/ui/switch';
import { updateStream } from '@/actions/stream';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

type FieldTypes = 'isChatEnabled' | 'isChatDelayed' | 'isChatFollowersOnly';

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard: FC<ToggleCardProps> = ({ label, value = false, field }) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success('Chat settings updated!'))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="shrink-0 font-semibold">{label}</p>
        <div className="space-y-2">
          <Switch disabled={isPending} onCheckedChange={onChange} checked={value}>
            {value ? 'On' : 'Off'}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="w-full rounded-xl p-10" />;
};

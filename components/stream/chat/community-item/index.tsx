'use client';

import { FC, useTransition } from 'react';
import { MinusCircle } from 'lucide-react';
import { toast } from 'sonner';

import { cn, stringToColor } from '@/lib/utils';
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { onBlock } from '@/actions/block';

interface CommunityItemProps {
  hostName: string;
  viewerName: string;
  participantName?: string;
  participantIdentity: string;
}

export const CommunityItem: FC<CommunityItemProps> = ({
  hostName,
  viewerName,
  participantName,
  participantIdentity,
}) => {
  const [isPending, startTransition] = useTransition();

  const color = stringToColor(participantName || '');
  const isSelf = participantName === viewerName;
  const isHost = viewerName === hostName;

  const handleBlock = () => {
    if (!participantName || isSelf || !isHost) return;

    startTransition(() => {
      onBlock(participantIdentity)
        .then(() => toast.success(`Blocked ${participantName}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <div
      className={cn(
        'group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5',
        isPending && 'opacity-50 pointer-events-none',
      )}
    >
      <p style={{ color: color }}>{participantName}</p>
      {isHost && !isSelf && (
        <Hint label="Block">
          <Button
            disabled={isPending}
            onClick={handleBlock}
            variant="ghost"
            className="size-auto p-1 opacity-0 transition group-hover:opacity-100"
          >
            <MinusCircle className="size-4 text-muted-foreground" />
          </Button>
        </Hint>
      )}
    </div>
  );
};

'use client';

import { FC } from 'react';
import { format } from 'date-fns';
import { ReceivedChatMessage } from '@livekit/components-core';

import { stringToColor } from '@/lib/utils';

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage: FC<ChatMessageProps> = ({ data }) => {
  const color = stringToColor(data.from?.name || '');

  return (
    <div className="flex gap-2 rounded-md p-2 hover:bg-white/5">
      <p className="text-sm text-white/40">{format(data.timestamp, 'HH:MM')}</p>
      <div className="flex grow flex-wrap items-baseline gap-1">
        <p className="whitespace-nowrap text-sm font-semibold">
          <span className="truncate" style={{ color: color }}>
            {data.from?.name}
          </span>
          :
        </p>
        <p className="break-all text-sm">{data.message}</p>
      </div>
    </div>
  );
};

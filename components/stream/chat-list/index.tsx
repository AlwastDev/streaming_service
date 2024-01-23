'use client';

import { FC } from 'react';
import { ReceivedChatMessage } from '@livekit/components-core';

import { ChatMessage } from '@/components/stream/chat-message';
import { Skeleton } from '@/components/ui/skeleton';

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}

export const ChatList: FC<ChatListProps> = ({ messages, isHidden }) => {
  if (isHidden || !messages || messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">{isHidden ? 'Chat is disabled' : 'Welcome to chat!'}</p>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-1 flex-col-reverse overflow-y-auto p-3">
      {messages.map((message) => (
        <ChatMessage key={message.timestamp} data={message} />
      ))}
    </div>
  );
};

export const ChatListSkeleton = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Skeleton className="h-6 w-1/2" />
    </div>
  );
};

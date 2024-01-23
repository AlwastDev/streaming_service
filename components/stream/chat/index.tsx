'use client';

import { FC, useEffect, useMemo, useState } from 'react';
import { ConnectionState } from 'livekit-client';
import { useMediaQuery } from 'usehooks-ts';
import { useChat, useConnectionState, useRemoteParticipant } from '@livekit/components-react';

import { ChatVariant, useChatSidebar } from '@/store/use-chat-sidebar';
import { ChatHeader } from '@/components/stream/chat-header';
import { ChatForm } from '@/components/stream/chat-form';
import { ChatList } from '@/components/stream/chat-list';

interface ChatProps {
  hostName: string;
  hostIdentity: string;
  viewerName: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat: FC<ChatProps> = ({
  hostName,
  hostIdentity,
  viewerName,
  isFollowing,
  isChatEnabled,
  isChatDelayed,
  isChatFollowersOnly,
}) => {
  const [value, setValue] = useState<string>('');

  const matches = useMediaQuery('(max-width: 1024px)');

  const { variant, onExpand } = useChatSidebar((state) => state);
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);

  const { chatMessages: messages, send } = useChat();

  const isOnline = participant && connectionState === ConnectionState.Connected;

  const isHidden = !isChatEnabled || !isOnline;

  const reversedMessages = useMemo(() => {
    return messages.sort((a, b) => b.timestamp - a.timestamp);
  }, [messages]);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onSubmit = () => {
    if (!send) return;

    send(value);
    setValue('');
  };

  useEffect(() => {
    if (matches) {
      onExpand();
    }
  }, [matches, onExpand]);

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col border-b border-l bg-background pt-0">
      <ChatHeader />
      {variant === ChatVariant.CHAT && (
        <>
          <ChatList messages={reversedMessages} isHidden={isHidden} />
          <ChatForm
            onSubmit={onSubmit}
            value={value}
            onChange={onChange}
            isHidden={isHidden}
            isFollowersOnly={isChatFollowersOnly}
            isDelayed={isChatDelayed}
            isFollowing={isFollowing}
          />
        </>
      )}
      {variant === ChatVariant.COMMUNITY && (
        <>
          <p>Community</p>
        </>
      )}
    </div>
  );
};

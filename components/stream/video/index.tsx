'use client';

import { FC } from 'react';
import { useConnectionState, useRemoteParticipant, useTracks } from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';

import { OfflineVideo } from '@/components/stream/offline-video';
import { LoadingVideo } from '@/components/stream/loading';
import { LiveVideo } from '@/components/stream/live-video';
import { Skeleton } from '@/components/ui/skeleton';

interface VideoProps {
  hostName: string;
  hostIdentity: string;
}

export const Video: FC<VideoProps> = ({ hostIdentity, hostName }) => {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone]).filter(
    (track) => track.participant.identity === hostIdentity,
  );

  let content;

  if (!participant && connectionState === ConnectionState.Connected) {
    content = <OfflineVideo username={hostName} />;
  } else if (!participant || tracks.length === 0) {
    content = <LoadingVideo label={connectionState} />;
  } else {
    content = <LiveVideo participant={participant} />;
  }

  return <div className="group relative aspect-video border-b">{content}</div>;
};

export const VideoSkeleton = () => {
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="size-full rounded-none" />
    </div>
  );
};

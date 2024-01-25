import { FC } from 'react';
import { WifiOff } from 'lucide-react';

interface OfflineVideoProps {
  username: string;
}

export const OfflineVideo: FC<OfflineVideoProps> = ({ username }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <WifiOff className="size-10 text-muted-foreground" />
      <p className="capitalize text-muted-foreground">{username} is offline</p>
    </div>
  );
};

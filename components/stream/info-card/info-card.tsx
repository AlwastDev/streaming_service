'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Pencil } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { InfoModal } from '@/components/stream/info-card/info-modal';

interface InfoCardProps {
  name: string;
  thumbnailUrl: string | null;
  hostIdentity: string;
  viewerIdentity: string;
}

export const InfoCard: FC<InfoCardProps> = ({ name, thumbnailUrl, hostIdentity, viewerIdentity }) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  if (!isHost) {
    return null;
  }

  return (
    <div className="px-4">
      <div className="rounded-xl bg-background">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="size-auto rounded-md bg-blue-600 p-2">
            <Pencil className="size-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold capitalize lg:text-lg">Edit your stream info</h2>
            <p className="text-xs text-muted-foreground lg:text-sm">Maximize your visibility</p>
          </div>
          <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        <Separator />
        <div className="space-y-4 p-4 lg:p-6">
          <div>
            <h3 className="mb-2 text-sm text-muted-foreground">Name</h3>
            <p className="text-sm font-semibold">{name}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm text-muted-foreground">Thumbnail</h3>
            {thumbnailUrl && (
              <div className="relative aspect-video w-[200px] overflow-hidden rounded-md border border-white/10">
                <Image fill src={thumbnailUrl} alt={name} className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

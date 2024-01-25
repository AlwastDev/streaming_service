'use client';

import React, { ElementRef, FC, useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';

import { updateStream } from '@/actions/stream';

import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { UploadDropzone } from '@/lib/uploadthing';
import { useRouter } from 'next/navigation';
import { Hint } from '@/components/hint';
import { Trash } from 'lucide-react';

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal: FC<InfoModalProps> = ({ initialName, initialThumbnailUrl }) => {
  const router = useRouter();

  const closeRef = useRef<ElementRef<'button'>>(null);

  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState<string>(initialName);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(initialThumbnailUrl);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onRemove = () => {
    startTransition(() => {
      updateStream({ thumbnailUrl: null })
        .then(() => {
          toast.success('Thumbnail removed');
          setThumbnailUrl('');
          closeRef?.current?.click();
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateStream({ name: name })
        .then(() => {
          toast.success('Stream updated');
          closeRef?.current?.click();
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit stream info</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-14">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input disabled={isPending} placeholder="Stream name" onChange={onChange} value={name} />
          </div>
          <div className="space-y-2">
            <Label>Thumbnail</Label>
            {thumbnailUrl ? (
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                <div className="absolute right-2 top-2 z-[10]">
                  <Hint label="Remove thumbnail" asChild side="left">
                    <Button type="button" disabled={isPending} onClick={onRemove} className="size-auto p-1.5">
                      <Trash className="size-4" />
                    </Button>
                  </Hint>
                </div>
                <Image src={thumbnailUrl} fill className="object-cover" alt="Thumbnail" />
              </div>
            ) : (
              <div className="rounded-xl border outline-dashed outline-muted">
                <UploadDropzone
                  endpoint="thumbnailUploader"
                  appearance={{
                    label: {
                      color: '#FFFFFF',
                    },
                    allowedContent: {
                      color: '#FFFFFF',
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    setThumbnailUrl(res?.[0]?.url);
                    router.refresh();
                    closeRef?.current?.click();
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

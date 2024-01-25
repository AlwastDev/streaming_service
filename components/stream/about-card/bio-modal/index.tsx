'use client';

import React, { ElementRef, FC, useRef, useState, useTransition } from 'react';
import { toast } from 'sonner';

import { updateUser } from '@/actions/user';

import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface BioModalProps {
  initialValue: string | null;
}

export const BioModal: FC<BioModalProps> = ({ initialValue }) => {
  const closeRef = useRef<ElementRef<'button'>>(null);

  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState(initialValue || '');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateUser({ bio: value })
        .then(() => toast.success('User bio updated'))
        .catch(() => toast.error('Something went wrong'))
        .finally(() => closeRef?.current?.click());
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
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea
            className="resize-none"
            disabled={isPending}
            placeholder="User bio"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

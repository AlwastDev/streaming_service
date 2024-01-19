'use client';

import { FC, useState } from 'react';
import { CheckCheck, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  value?: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ value }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <Button onClick={onCopy} disabled={!value || isCopied} variant="ghost" size="sm">
      <Icon className="size-4" />
    </Button>
  );
};

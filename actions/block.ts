'use server';

import { revalidatePath } from 'next/cache';

import { blockUser, unblockUser } from '@/lib/block-service';

export const onBlock = async (id: string) => {
  const blockedUser = await blockUser(id);

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const unblockedUser = await unblockUser(id);

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }

  return unblockedUser;
};

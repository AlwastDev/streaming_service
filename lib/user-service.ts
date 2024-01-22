import { db } from '@/lib/db';

export const getUserByUsername = async (username: string) => {
  return await db.user.findUnique({
    where: {
      username,
    },
    include: {
      stream: true,
    },
  });
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      stream: true,
    },
  });

  return user;
};

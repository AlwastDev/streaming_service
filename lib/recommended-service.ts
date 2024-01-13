import { db } from './db';

export const getRecommended = async () => {
  return await db.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

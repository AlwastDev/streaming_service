import { format } from 'date-fns';

import { columns } from './_components/Columns';
import { DataTable } from './_components/DataTable';
import { getBlockedUsers } from '@/lib/block-service';

export default async function CommunityPage() {
  const blockedUsers = await getBlockedUsers();

  const formattedBlockedUsers = blockedUsers.map((blockedUser) => ({
    ...blockedUser,
    userId: blockedUser.blocked.id,
    imageUrl: blockedUser.blocked.imageUrl,
    username: blockedUser.blocked.username,
    createdAt: format(new Date(blockedUser.blocked.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Community Settings</h1>
      </div>
      <DataTable columns={columns} data={formattedBlockedUsers} />
    </div>
  );
}

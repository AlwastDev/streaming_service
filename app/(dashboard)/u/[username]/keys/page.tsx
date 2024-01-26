import { getSelf } from '@/lib/auth-service';
import { getStreamByUserId } from '@/lib/stream-service';

import { UrlCard } from './_components/UrlCard';
import { KeyCard } from './_components/KeyCard';
import { ConnectModel } from './_components/ConnectModel';

export default async function KeysPage() {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error('stream not found');
  }

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        <ConnectModel />
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
}

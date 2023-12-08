import { NumberBadge } from '@/components/numberBadge/NumberBadge';
import { StatusBadge, StatusBadgeProps } from '@/components/statusBadge/StatusBadge';

type TestCardProps = StatusBadgeProps & {
  url: string;
  title: string;
};

export const TestCard: React.FC<TestCardProps> = ({ status, title, url }) => {
  return (
    <div className="flex gap-4 border-b border-zinc-800 py-4">
      <div className="w-1/3">{title}</div>
      <div className="w-1/3">
        <StatusBadge status={status} />
      </div>
      <div className="w-1/3">
        <div className="flex items-center gap-2">
          <span>Commands</span>
          <NumberBadge value={12} />
        </div>
      </div>
      <div className="flex flex-1 justify-end decoration-dashed">
        <span>{url.replace('https://', '')}</span>
      </div>
    </div>
  );
};

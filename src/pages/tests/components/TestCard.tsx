import { NumberBadge } from '../../../components/numberBadge/NumberBadge';
import { StatusBadge, StatusBadgeProps } from '../../../components/statusBadge/StatusBadge';

type TestCardProps = StatusBadgeProps & {
  url: string;
  title: string;
};

export const TestCard: React.FC<TestCardProps> = ({ status, title, url }) => {
  return (
    <div className="flex gap-3 border-b border-zinc-900 py-4">
      <div className="w-1/3">{title}</div>
      <div className="w-1/3 text-center">
        <StatusBadge status={status} />
      </div>
      <div className="w-1/3">
        <div className="flex items-center gap-2">
          <span>Commands</span>
          <NumberBadge value={12} />
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <a className="text-zinc-600" target="_blank" href={url}>
          {url.replace('https://', '')}
        </a>
      </div>
    </div>
  );
};

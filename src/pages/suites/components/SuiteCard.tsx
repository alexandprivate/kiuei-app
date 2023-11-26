import { NumberBadge } from '../../../components/numberBadge/NumberBadge';
import { StatusBadge, StatusBadgeProps } from '../../../components/statusBadge/StatusBadge';

type SuiteCardProps = StatusBadgeProps & {
  url: string;
  title: string;
};

export const SuiteCard: React.FC<SuiteCardProps> = ({ status, title }) => {
  return (
    <div className="flex gap-4 border-b border-zinc-900 py-4">
      <div className="w-1/3">{title}</div>
      <div className="w-1/3 flex justify-center">
        <StatusBadge status={status} />
      </div>
      <div className="w-1/3">
        <div className="flex items-center gap-2 justify-end">
          <span>Tests</span>
          <NumberBadge value={12} />
        </div>
      </div>
    </div>
  );
};

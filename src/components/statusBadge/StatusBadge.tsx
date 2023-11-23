import { cn } from '../../utils';

export type StatusBadgeProps = {
  status: 'passed' | 'failed' | 'pending';
};

const StatusMap = {
  passed: 'bg-green-950/50 text-green-400',
  failed: 'bg-red-950/50 text-red-400',
  pending: 'bg-yellow-950/50 text-yellow-400'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <small
      className={cn('h-7 items-center px-2 rounded inline-flex capitalize', StatusMap[status])}>
      {status}
    </small>
  );
};

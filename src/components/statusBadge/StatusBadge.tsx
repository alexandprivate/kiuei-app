import { cn } from '../../utils';

export type StatusBadgeProps = {
  status: 'passed' | 'failed' | 'pending';
};

const StatusMap = {
  passed: 'bg-green-900/40 text-green-300 border-green-900',
  failed: 'bg-red-900/40 text-red-300 border-red-900',
  pending: 'bg-yellow-900/40 text-yellow-300 border-yellow-900'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={cn(
        'h-7 text-xs items-center px-2 rounded inline-flex capitalize border',
        StatusMap[status]
      )}>
      {status}
    </span>
  );
};

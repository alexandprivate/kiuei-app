import { cn } from '../../utils';

export type StatusBadgeProps = {
  results: string;
};

const statusMap = {
  passed: 'bg-green-900/40 text-green-300 border-green-900',
  failed: 'bg-red-900/40 text-red-300 border-red-900',
  'no result': 'text-zinc-400 border-zinc-500'
} as const;

export const StatusBadge: React.FC<StatusBadgeProps> = ({ results }) => {
  const parsedResults = JSON.parse(results) as TestRunResult[];

  const status =
    parsedResults.length === 0
      ? 'no result'
      : parsedResults[0].status === 'failed'
      ? 'failed'
      : 'passed';

  return (
    <span
      className={cn(
        'h-7 text-xs items-center px-2 rounded inline-flex capitalize border',
        statusMap[status]
      )}>
      {status}
    </span>
  );
};

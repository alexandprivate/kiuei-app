import { NumberBadge } from '../../../components/numberBadge/NumberBadge';
import { Button } from '../../../components/button/Button';

const CommandsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium">Commands</span>
        <NumberBadge value={0} />
      </div>
      <Button flavor="secondary">Add Command</Button>
    </div>
  );
};

export const Commands = () => {
  return (
    <div className="border border-zinc-800 mt-12 rounded-lg p-5">
      <CommandsHeader />

      <div className="flex flex-col"></div>
    </div>
  );
};

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

const DragHandle = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-1 border border-zinc-800 py-2 rounded">
      <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-1 bg-zinc-600 rounded-full mx-2"></div>
      <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
    </div>
  );
};

export const Commands = () => {
  return (
    <div className="border border-zinc-800 mt-12 rounded-lg p-5">
      <CommandsHeader />

      <div className="flex flex-col">
        {new Array(10).fill('').map((_, i) => (
          <div key={i} className="border-b border-zinc-800 items-stretch flex">
            <DragHandle />
            <div className=" p-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

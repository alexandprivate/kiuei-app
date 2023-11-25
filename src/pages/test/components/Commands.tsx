import { NumberBadge } from '../../../components/numberBadge/NumberBadge';
import { Button } from '../../../components/button/Button';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { MdDragIndicator as DragIcon } from 'react-icons/md';
import { IoTrashOutline as TrashIcon } from 'react-icons/io5';
import { IoDuplicateOutline as DuplicateIcon } from 'react-icons/io5';

const CommandsHeader = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-950/80 sticky top-0 py-5 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium">Commands</span>
        <NumberBadge value={0} />
      </div>
      <Button flavor="secondary" icon="plus">
        Add Command
      </Button>
    </div>
  );
};

const CommandCard = () => {
  return (
    <div className="flex items-center justify-between py-2 pl-2 pr-4 rounded bg-zinc-900 ">
      <div className="flex items-center gap-2 w-full">
        <button className="px-2 self-stretch">
          <DragIcon />
        </button>
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center justify-between w-full gap-4">
            <div>
              <code className="text-sm">Expect the page title to have an exact text</code>
            </div>
            <div className="flex gap-2">
              <TrashIcon />
              <DuplicateIcon />
            </div>
          </div>
          {new Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex gap-3 w-full">
              <code className="text-sm">Text</code>
              <input
                type="text"
                className="border-b border-zinc-800 bg-transparent w-full hover:border-zinc-600 focus:outline-0 focus:border-zinc-700 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Commands = () => {
  const handleDragEnd = (event: unknown): void => {
    const { active, over } = event;
  };
  return (
    <div className="border border-zinc-800 mt-12 rounded px-5 pb-5">
      <CommandsHeader />

      <div className="flex flex-col gap-1 mt-3">
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
          <SortableContext items={[1, 2, 3, 4, 5]} strategy={verticalListSortingStrategy}>
            {new Array(5).fill(0).map((_, index) => (
              <CommandCard key={index} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

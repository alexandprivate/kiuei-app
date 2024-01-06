import { ListHeader } from '@/components/listHeader/ListHeader';
import { OutlineWrapper } from '@/components/outlineWrapper/OutlineWrapper';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { IoTrashOutline as TrashIcon } from 'react-icons/io5';
import { IoDuplicateOutline as DuplicateIcon } from 'react-icons/io5';
import { MdDragIndicator as DragIcon } from 'react-icons/md';

const CommandCard: React.FC<{ command: TestCommand }> = ({ command }) => {
  console.log({ command });
  return (
    <div className="flex items-center justify-between py-2 pl-2 pr-4 rounded bg-zinc-800">
      <div className="flex items-center gap-2 w-full">
        <button className="px-2 self-stretch" type="button">
          <DragIcon />
        </button>
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center justify-between w-full gap-4 mb-2">
            <div>
              <span>{command.name}</span>
            </div>
            <div className="flex gap-3">
              <button type="button">
                <TrashIcon />
              </button>
              <button type="button">
                <DuplicateIcon />
              </button>
            </div>
          </div>

          {JSON.parse(command.paramsNames).map((paramName: string, index: number) => (
            <div className="flex gap-3 w-full items-start">
              <span className=" text-zinc-400">{paramName}:</span>
              <input
                type="text"
                value={JSON.parse(command.params)[index]}
                className="border-b border-zinc-700 bg-transparent w-full hover:border-zinc-600 focus:outline-0 focus:border-zinc-600 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CommandsProps {
  commands: TestCommand[];
}

export const Commands: React.FC<CommandsProps> = ({ commands }) => {
  const handleDragEnd = (event: unknown): void => {
    const { active, over } = event;
  };

  return (
    <OutlineWrapper>
      <ListHeader
        title="Commands"
        badgeValue={commands.length}
        action={{ label: 'Add Command', onClick: () => null, icon: 'plus' }}
      />

      <div className="flex flex-col gap-2 mt-3">
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
          <SortableContext items={[1, 2, 3, 4, 5]} strategy={verticalListSortingStrategy}>
            {commands.map((command, index) => (
              <CommandCard command={command} key={index} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </OutlineWrapper>
  );
};

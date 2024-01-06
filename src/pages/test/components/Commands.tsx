import { ListHeader } from "@/components/listHeader/ListHeader";
import { OutlineWrapper } from "@/components/outlineWrapper/OutlineWrapper";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IoTrashOutline as TrashIcon } from "react-icons/io5";
import { IoDuplicateOutline as DuplicateIcon } from "react-icons/io5";
import { MdDragIndicator as DragIcon } from "react-icons/md";

const CommandCard = () => {
  return (
    <div className="flex items-center justify-between py-2 pl-2 pr-4 rounded bg-zinc-800">
      <div className="flex items-center gap-2 w-full">
        <button className="px-2 self-stretch">
          <DragIcon />
        </button>
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center justify-between w-full gap-4 mb-2">
            <div>
              <span>Expect the page title to have an exact text</span>
            </div>
            <div className="flex gap-3">
              <button>
                <TrashIcon />
              </button>
              <button>
                <DuplicateIcon />
              </button>
            </div>
          </div>
          {new Array(2).fill(0).map((_, index) => (
            <div key={index} className="flex gap-3 w-full items-center">
              <span className="text-sm text-zinc-400">Text:</span>
              <input
                type="text"
                className="border-b border-zinc-700 bg-transparent w-full hover:border-zinc-600 focus:outline-0 focus:border-zinc-600 transition-all"
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
    <OutlineWrapper>
      <ListHeader
        title="Commands"
        badgeValue={0}
        action={{ label: "Add Command", onClick: () => null, icon: "plus" }}
      />

      <div className="flex flex-col gap-2 mt-3">
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={[1, 2, 3, 4, 5]}
            strategy={verticalListSortingStrategy}
          >
            {new Array(12).fill(0).map((_, index) => (
              <CommandCard key={index} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </OutlineWrapper>
  );
};

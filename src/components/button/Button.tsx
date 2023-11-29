import React from 'react';
import { cn } from '../../utils';
import { GoPlus as PlusIcon } from 'react-icons/go';
import { IoSaveOutline as SaveIcon } from 'react-icons/io5';
import { RiTestTubeLine as TestIcon } from 'react-icons/ri';
import { LuUserPlus2 as AddUserIcon } from 'react-icons/lu';

const FlavorsMap = {
  primary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-200/80',
  secondary: 'bg-zinc-800/70 text-zinc-200 border border-zinc-700 hover:bg-zinc-800'
} as const;

const SizeMap = {
  sm: 'h-7 text-sm px-3',
  md: 'h-9 px-4'
} as const;

const IconMap = {
  plus: <PlusIcon />,
  save: <SaveIcon />,
  test: <TestIcon />,
  addUser: <AddUserIcon />
} as const;

export type ButtonProps = React.ComponentProps<'button'> & {
  children: React.ReactNode;
  flavor?: keyof typeof FlavorsMap;
  size?: keyof typeof SizeMap;
  className?: string;
  icon?: keyof typeof IconMap;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  flavor = 'primary',
  size = 'md',
  className,
  icon = null,
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      className={cn(
        'rounded transition-all inline-flex items-center gap-2',
        FlavorsMap[flavor],
        SizeMap[size],
        className
      )}>
      {icon !== null && <span>{IconMap[icon]}</span>}
      <span>{children}</span>
    </button>
  );
};

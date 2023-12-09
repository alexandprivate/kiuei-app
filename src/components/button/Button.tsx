import React from 'react';
import { cn } from '../../utils';
import { GoPlus as PlusIcon } from 'react-icons/go';
import { IoSaveOutline as SaveIcon } from 'react-icons/io5';
import { RiTestTubeLine as TestIcon } from 'react-icons/ri';
import { LuUserPlus2 as AddUserIcon } from 'react-icons/lu';
import { PiSpinner as SpinnerIcon } from 'react-icons/pi';

const FlavorsMap = {
  primary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-300',
  secondary: 'bg-zinc-800 text-zinc-100 border border-zinc-600 hover:bg-zinc-700/80'
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
  showSpinner?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  flavor = 'primary',
  size = 'md',
  className,
  icon = null,
  showSpinner,
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
      {showSpinner ? (
        <SpinnerIcon size={20} className="animate-spin mx-auto" />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

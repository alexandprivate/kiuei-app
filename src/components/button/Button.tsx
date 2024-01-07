import React from 'react';
import { cn } from '../../utils';
import { SpinnerIcon, TestIcon, AddUserIcon, SaveIcon, PlusIcon } from '../icon/Icon';

const FLAVOR_MAP = {
  primary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-300 disabled:bg-zinc-200',
  secondary:
    'bg-zinc-800 text-zinc-100 border border-zinc-600 hover:bg-zinc-700/80 disabled:bg-zinc-600'
} as const;

const BG_MAP = {
  primary: 'bg-zinc-200',
  secondary: 'bg-zinc-600'
} as const;

const SIZE_MAP = {
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
  flavor?: keyof typeof FLAVOR_MAP;
  size?: keyof typeof SIZE_MAP;
  className?: string;
  icon?: keyof typeof IconMap;
  showSpinner?: boolean;
};

export const Spinner: React.FC<Required<Pick<ButtonProps, 'flavor' | 'size'>>> = ({
  flavor,
  size
}) => (
  <span
    className={cn(
      'w-full flex item-center justify-center z-10 absolute left-0 flex-col',
      BG_MAP[flavor],
      SIZE_MAP[size]
    )}>
    <SpinnerIcon size={20} className={cn('animate-spin mx-auto')} />
  </span>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  flavor = 'primary',
  size = 'md',
  className,
  icon = null,
  showSpinner,
  type = 'button',
  disabled,
  ...restProps
}) => {
  return (
    <button
      type={type}
      disabled={disabled || showSpinner}
      {...restProps}
      className={cn(
        'rounded transition-all inline-flex items-center gap-2 relative overflow-hidden',
        FLAVOR_MAP[flavor],
        SIZE_MAP[size],
        className
      )}>
      {showSpinner && <Spinner flavor={flavor} size={size} />}

      {icon !== null && <span>{IconMap[icon]}</span>}
      <span>{children}</span>
    </button>
  );
};

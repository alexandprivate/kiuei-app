import React from 'react';
import { cn } from '../../utils/index';

const FlavorsMap = {
  primary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-200/80',
  secondary: 'bg-zinc-800/70 text-zinc-200 border border-zinc-700 hover:bg-zinc-800'
} as const;

const SizeMap = {
  sm: 'h-7 text-sm px-3',
  md: 'h-9 px-4'
} as const;

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  children: React.ReactNode;
  flavor?: keyof typeof FlavorsMap;
  size?: 'sm' | 'md';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  flavor = 'primary',
  size = 'md',
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      className={cn('rounded transition-all', FlavorsMap[flavor], SizeMap[size])}>
      {children}
    </button>
  );
};

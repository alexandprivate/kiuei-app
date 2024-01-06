import React from 'react';
import { Button, ButtonProps } from '../button/Button';

export type Action = { name: string } & Pick<
  ButtonProps,
  'flavor' | 'onClick' | 'disabled' | 'icon' | 'showSpinner'
>;

export type PageHeaderProps = {
  title: string;
  actions?: Action[];
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, actions = [] }) => {
  return (
    <div className="flex items-center justify-between mb-14">
      <h2 className="text-3xl">{title}</h2>
      <div className="flex items-center gap-2">
        {actions?.map(({ name, ...restAction }) => (
          <Button key={name} {...restAction}>
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Button, ButtonProps } from '../button/Button';

export type Action = { name: string } & Pick<ButtonProps, 'flavor' | 'onClick' | 'disabled'>;

export type IntroProps = {
  title: string;
  actions?: Action[];
};

export const Intro: React.FC<IntroProps> = ({ title, actions = [] }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-medium text-3xl">{title}</h2>
      <div className="flex items-center gap-2">
        {actions?.map((action) => (
          <Button flavor={action.flavor} onClick={action.onClick}>
            {action.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

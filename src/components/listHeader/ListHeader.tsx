import React from 'react';
import { Button } from '../button/Button';
import { NumberBadge } from '../numberBadge/NumberBadge';

export const ListHeader: React.FC<{
  title: string;
  action: { label: string; onClick: () => void };
  badgeValue: number;
}> = ({ title, action, badgeValue }) => {
  return (
    <div className="flex items-center justify-between bg-zinc-950/80 sticky top-0 py-5 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium">{title}</span>
        <NumberBadge value={badgeValue} />
      </div>
      <Button flavor="secondary" icon={action.icon} onClick={action.onClick}>
        {action.label}
      </Button>
    </div>
  );
};

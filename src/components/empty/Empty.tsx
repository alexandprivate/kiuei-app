import React from 'react';
import { ButtonProps, Button } from '../button/Button';
import emptyImg from './empty.svg';

interface EmptyProps extends Pick<ButtonProps, 'onClick'> {
  title?: string;
  message?: string | React.ReactNode;
  ctaLabel?: string;
}

export const Empty: React.FC<EmptyProps> = ({ title, message, onClick, ctaLabel }) => {
  return (
    <div>
      <img className="mx-auto mt-5" alt="empty list" src={emptyImg} height={260} width={260} />
      {title && (
        <div className="mx-auto max-w-xs text-center capitalize">
          <h2 className="text-2xl">{title}</h2>
        </div>
      )}
      {message && <p className="mx-auto max-w-xs text-center text-zinc-400">{message}</p>}

      {ctaLabel != null && (
        <div className="mx-auto mt-4">
          <Button onClick={onClick}>{ctaLabel}</Button>
        </div>
      )}
    </div>
  );
};

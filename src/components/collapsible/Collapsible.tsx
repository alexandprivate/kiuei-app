import { useState } from 'react';

export const Collapsible: React.FC<{
  children: React.ReactNode;
  open: boolean;
}> = ({ children, open }) => {
  return (
    <div className={`collapsible ${open ? 'open' : ''}`}>
      <div className="collapsible-inner">{children}</div>
    </div>
  );
};

export const useCollapsible = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return { open, toggle };
};

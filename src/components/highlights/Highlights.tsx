import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

type ItemProps = {
  title: string;
  children: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <div className="text-xs text-zinc-400 uppercase">{title}</div>
      <div className="flex items-center gap-2">{children}</div>
    </Wrapper>
  );
};

export const Highlights: React.FC<{ children: React.ReactNode }> & {
  Item: React.FC<ItemProps>;
} = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="grid grid-cols-2 xl:grid-cols-3 items-center gap-x-4 gap-y-6">
        {children}
      </div>
    </div>
  );
};

Highlights.Item = Item;

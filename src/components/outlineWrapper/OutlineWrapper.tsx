import React from "react";

export const OutlineWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="border border-zinc-800 mt-12 rounded px-5 pb-5">
      {children}
    </div>
  );
};

type NumberBadgeProps = {
  value: number;
};

export const NumberBadge: React.FC<NumberBadgeProps> = ({ value }) => {
  return (
    <span className="bg-zinc-700/50 h-6 items-center inline-flex px-[6px] rounded text-xs border border-zinc-700">
      {value}
    </span>
  );
};

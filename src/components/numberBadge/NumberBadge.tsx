type NumberBadgeProps = {
  value: number;
};

export const NumberBadge: React.FC<NumberBadgeProps> = ({ value }) => {
  return (
    <small className="bg-purple-950/50 text-purple-400 h-6 items-center inline-flex px-2 rounded">
      {value}
    </small>
  );
};

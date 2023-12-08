import { NavLink } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { BsArrowUpRightSquare } from 'react-icons/bs';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'Tests', path: '/tests' },
  { name: 'Suites', path: '/suites' },
  { name: 'Settings', path: '/settings' },
  { name: 'Organization', path: '/organization' }
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-col justify-between gap-1">
        {menu.map((item) => (
          <li key={item.name}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'p-2 block bg-zinc-800 rounded'
                  : 'p-2 block hover:bg-zinc-800 rounded'
              }
              to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Brand: React.FC = () => {
  return <h3 className="text-3xl font-bold ml-2 mb-7">Kiuei</h3>;
};

const User: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="w-8 h-8 bg-zinc-800 rounded-full inline-flex items-center justify-center">
        <CiUser />
      </div>
      <div className="flex flex-col">
        <span>alex@gmail.com</span>
      </div>
    </div>
  );
};

type PlanItemProps = {
  title: string;
  count: string;
  percentage: number;
};

const PlanItem: React.FC<PlanItemProps> = ({ title, count, percentage }) => {
  console.log({ percentage });
  return (
    <>
      <span className="text-xs">
        {count} <span className="text-zinc-400 capitalize">{title}</span>
      </span>
      <div className="h-2 border border-zinc-600 bg-green-400 w-full rounded-full overflow-hidden relative">
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full bg-zinc-800 rounded-full absolute`}
        />
      </div>
    </>
  );
};

const Plan: React.FC = () => {
  const usage = {
    commands: {
      used: 36,
      limit: 100
    },
    runs: {
      used: 18,
      limit: 100
    }
  };

  const commands = {
    percentage: (usage.commands.used / usage.commands.limit) * 100,
    count: `${usage.commands.used} / ${usage.commands.limit}`
  };

  const runs = {
    percentage: (usage.runs.used / usage.runs.limit) * 100,
    count: `${usage.runs.used} / ${usage.runs.limit}`
  };

  return (
    <div className="flex flex-col gap-5 p-2">
      <div className="flex items-center gap-3">
        <span>Base Plan</span>
        <BsArrowUpRightSquare size="12" />
      </div>
      <div className="flex flex-col gap-2 w-full ite">
        <PlanItem title="commands" count={commands.count} percentage={commands.percentage} />
        <PlanItem title="runs" count={runs.count} percentage={runs.percentage} />
      </div>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="min-h-screen border-r border-zinc-800 w-[300px] p-3 ">
      <div className="gap-8 flex flex-col sticky top-3">
        <Brand />
        <User />
        <Plan />
        <Navigation />
      </div>
    </div>
  );
};

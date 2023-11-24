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
                  ? 'p-2 block bg-zinc-900 rounded'
                  : 'p-2 block hover:bg-zinc-900 rounded'
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
  return <h3 className="text-2xl font-medium ml-2 mb-7">Kiuei</h3>;
};

const User: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="w-8 h-8 bg-zinc-900 rounded-full inline-flex items-center justify-center">
        <CiUser></CiUser>
      </div>
      <div className="flex flex-col">
        <span>alex@gmail.com</span>
      </div>
    </div>
  );
};

const PlanItem: React.FC<{ title: string; count: string }> = ({ title, count }) => {
  return (
    <>
      <span className="text-xs">
        {count} <span className="text-zinc-400 capitalize">{title}</span>
      </span>
      <div className="h-2 bg-purple-800 w-full rounded-full" />
    </>
  );
};

const Plan: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="flex items-center gap-2">
        <span>Free Plan</span>
        <BsArrowUpRightSquare size="12" />
      </div>
      <div className="flex flex-col gap-2 w-full ite">
        <PlanItem title="commands" count="100/100" />
        <PlanItem title="runs" count="100/100" />
      </div>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="min-h-screen border-r border-zinc-900 w-[300px] p-3 ">
      <div className="gap-8 flex flex-col sticky top-3">
        <Brand />
        <User />
        <Plan />
        <Navigation />
      </div>
    </div>
  );
};

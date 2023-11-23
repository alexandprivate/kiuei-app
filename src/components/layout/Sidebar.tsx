import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'Tests', path: '/tests' },
  { name: 'Suites', path: '/suites' },
  { name: 'Settings', path: '/settings' },
  { name: 'Organization', path: '/settings' }
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-col justify-between">
        {menu.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="p-2 block hover:bg-zinc-900 rounded">
              {item.name}
            </Link>
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

const Plan: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <span>Free Plan</span>
      <div className="flex flex-col gap-2 w-full ite">
        <small>
          <span className="text-zinc-400">Commands</span> 100/100
        </small>
        <div className="h-2 bg-green-600 w-full rounded-full"></div>
        <small>
          <span className="text-zinc-400">Runs</span> 100/100
        </small>
        <div className="h-2 bg-green-600 w-full rounded-full"></div>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="min-h-screen border-r border-zinc-900 w-[300px] p-3 ">
      <div className="gap-6 flex flex-col sticky top-3">
        <Brand />
        <User />
        <Plan />
        <Navigation />
      </div>
    </div>
  );
};

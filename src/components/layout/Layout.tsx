import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col gap-8 ">
        <TopBar />
        <div className="w-full xl:w-10/12 mx-auto px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

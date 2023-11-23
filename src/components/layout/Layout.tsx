import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
  const { pathname } = useLocation();

  const renderLayoutElements = pathname !== '/sign-in';

  return (
    <div className="flex">
      {renderLayoutElements && <Sidebar />}
      <div className="w-full flex flex-col gap-8 ">
        {renderLayoutElements && <TopBar />}
        <div className="w-full xl:w-10/12 mx-auto px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

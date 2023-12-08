import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { TopBar } from '@/components/topbar/TopBar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { useSession } from '@/store/useSession';
import { useNavigate } from 'react-router-dom';

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const setSession = useSession((s) => s.setSession);
  const renderLayoutElements = pathname !== '/sign-in';

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate('/');
      } else {
        navigate('/sign-in');
      }
    });
  }, [setSession, navigate]);

  return (
    <div className="flex relative">
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

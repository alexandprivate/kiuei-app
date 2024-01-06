import { Sidebar } from '@/components/sidebar/Sidebar';
import { TopBar } from '@/components/topbar/TopBar';
import { useSession } from '@/store/useSession';
import { supabase } from '@/utils/supabase';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { client, commands } from '@/api';

const ResolveCommands = () => {
  useQuery({
    queryKey: ['commands'],
    queryFn: () => commands.read()
  });
  return null;
};

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const setSession = useSession((s) => s.setSession);
  const renderLayoutElements = pathname !== '/sign-in' && pathname !== '/onboarding';

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate('/sign-in');
      }
    });
  }, [setSession, navigate]);

  return (
    <QueryClientProvider client={client}>
      <div className="flex relative">
        {renderLayoutElements && <Sidebar />}
        <div className="w-full flex flex-col gap-8 ">
          {renderLayoutElements && <TopBar />}
          <div className="w-full xl:w-10/12 mx-auto px-8">
            <Outlet />
          </div>
        </div>
      </div>
      <ResolveCommands />
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
};

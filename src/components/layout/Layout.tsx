import { Sidebar } from '@/components/sidebar/Sidebar';
import { TopBar } from '@/components/topbar/TopBar';
import { useSession } from '@/store/useSession';
import { supabase } from '@/utils/supabase';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import * as api from '@/api';
import { SpinnerIcon } from '@/components/icon/Icon';
import { Onboarding } from '@/components/onboarding/Onboarding';

const Spinner = () => {
  return (
    <div className="h-screen w-screen fixed flex flex-col item-center justify-center">
      <span className="mx-auto">
        <SpinnerIcon size={32} className="animate-spin mx-auto" />
      </span>
    </div>
  );
};

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const setSession = useSession((s) => s.setSession);
  const session = useSession((s) => s.session);

  const renderLayoutElements = pathname !== '/sign-in' && pathname !== '/onboarding';

  const [userData] = useQueries({
    queries: [
      {
        queryKey: ['user'],
        queryFn: () => api.user.read(session?.user.id ?? ''),
        enabled: session?.user != null
      },
      {
        queryKey: ['commands'],
        queryFn: () => api.commands.read(),
        staleTime: Infinity
      }
    ]
  });

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

  if (userData.data == null && userData.isLoading && session != null) return <Spinner />;

  if (userData.data?.user == null && !userData.isLoading && !userData.isFetching && session != null)
    return <Onboarding />;

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

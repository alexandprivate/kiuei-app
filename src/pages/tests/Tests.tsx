import { PageHeader, PageHeaderProps } from '@/components/pageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { TestCard } from './components/TestCard';
import * as api from '@/api';
import { useSession } from '@/store/useSession';
import { useQuery } from '@tanstack/react-query';
import { Empty } from '@/components/empty/Empty';

export const Tests = () => {
  const session = useSession((s) => s.session);

  const actions = [
    { name: 'Add Test', onClick: () => {}, icon: 'plus' }
  ] as PageHeaderProps['actions'];

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => api.user.read(session?.user.id ?? ''),
    enabled: session?.user != null
  });

  if (isLoading && data == null) return <>Loading...</>;

  return (
    <>
      <PageHeader title="Tests" actions={actions} />

      <div className="flex flex-col">
        {data?.user.tests.length === 0 && (
          <Empty title="Tests not found" message="Let's add some" />
        )}
        {data?.user?.org?.tests.map((test) => (
          <Link to={`/tests/${test.id}`} key={test.id}>
            <TestCard
              title={test.description}
              url={test.url}
              results={test.results}
              numberOfCommands={test.commands.length}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

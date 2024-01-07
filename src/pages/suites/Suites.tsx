import { PageHeader, PageHeaderProps } from '@/components/pageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { SuiteCard } from './components/SuiteCard';

const data = [
  {
    id: '1',
    title: 'My Portfolio',
    url: 'https://alexandprivate.com',
    status: 'passed'
  },
  {
    id: '2',
    title: 'Application pages',
    url: 'https://alexandprivate.com',
    status: 'no result'
  },
  {
    id: '3',
    title: 'Marketing website blog',
    url: 'https://alexandprivate.com',
    status: 'failed'
  }
] as const;

export const Suites = () => {
  const actions = [
    { name: 'Add Suite', onClick: () => {}, icon: 'plus' }
  ] as PageHeaderProps['actions'];

  return (
    <>
      <PageHeader title="Suites" actions={actions} />

      <div className="flex flex-col mt-12">
        {data.map((suite) => (
          <Link to={`/suites/${suite.id}`}>
            <SuiteCard title={suite.title} url={suite.url} results={'[]'} />
          </Link>
        ))}
      </div>
    </>
  );
};

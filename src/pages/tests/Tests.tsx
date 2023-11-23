import { Link } from 'react-router-dom';
import { Intro } from '../../components/intro/Intro';
import { TestCard } from './components/TestCard';

const data = [
  {
    id: '1',
    title: 'My Portfolio home page 1',
    url: 'https://alexandprivate.com',
    status: 'passed'
  },
  {
    id: '2',
    title: 'My Portfolio contact page',
    url: 'https://alexandprivate.com',
    status: 'pending'
  },
  {
    id: '3',
    title: 'My Portfolio about me page',
    url: 'https://alexandprivate.com',
    status: 'failed'
  }
] as const;

export const Tests = () => {
  const actions = [{ name: 'Add Test', onClick: () => {} }];
  return (
    <>
      <Intro title="Tests" actions={actions} />

      <div className="flex flex-col mt-12">
        {data.map((test) => (
          <Link to={`/test/${test.id}`}>
            <TestCard title={test.title} url={test.url} status={test.status} />
          </Link>
        ))}
      </div>
    </>
  );
};

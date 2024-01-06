import { Highlights } from '@/components/highlights/Highlights';
import { PageHeader, PageHeaderProps } from '@/components/pageHeader/PageHeader';
import { StatusBadge } from '@/components/statusBadge/StatusBadge';
import { WorldIcon, TimerIcon, ThreeDotsIcon } from '@/components/icon/Icon';
import { Commands } from './components/Commands';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { UserResponse, test } from '@/api';

export const Test = () => {
  const param = useParams();
  const client = useQueryClient();

  const initialData = client
    .getQueryData<{ user: UserResponse }>(['user'])
    ?.user?.org?.tests.find((t: Test) => t.id === param.testId) as Test;

  const { data, isLoading } = useQuery({
    queryKey: [`test_${param.testId}`],
    queryFn: () => test.read(param.testId ?? ''),
    enabled: true,
    initialData: { test: initialData }
  });

  const actions = [
    { name: 'Run Test', onClick: () => {}, icon: 'test' },
    { name: 'Save', onClick: () => {}, flavor: 'secondary', icon: 'save' },
    { name: <ThreeDotsIcon />, onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  if (isLoading && data == null) return <>Loading...</>;

  return (
    <>
      <PageHeader title={data.test.description} actions={actions} />

      <Highlights>
        <Highlights.Item title="Status">
          <StatusBadge results={data.test.results} />
        </Highlights.Item>
        <Highlights.Item title="Last Run">
          <TimerIcon />
          <span>Yesterday</span>
        </Highlights.Item>
        <Highlights.Item title="Url">
          <WorldIcon />
          <a
            href={data.test.url}
            target="blank"
            className="underline decoration-dashed underline-offset-4">
            {data.test.url}
          </a>
        </Highlights.Item>
        <Highlights.Item title="Created">
          <TimerIcon />
          <span>{data.test.createdAt}</span>
        </Highlights.Item>
        <Highlights.Item title="Last Update">
          <TimerIcon />
          <span>{data.test.updatedAt}</span>
        </Highlights.Item>
        <Highlights.Item title="Scheduled run">
          <TimerIcon />
          {/* TODO: solve this */}
          <span>Daily at 11:00 am</span>
        </Highlights.Item>
      </Highlights>

      <Commands />
    </>
  );
};

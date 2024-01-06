import { Highlights } from '@/components/highlights/Highlights';
import { PageHeader, PageHeaderProps } from '@/components/pageHeader/PageHeader';
import { StatusBadge } from '@/components/statusBadge/StatusBadge';
import { WorldIcon, TimerIcon, ThreeDotsIcon } from '@/components/icon/Icon';
import { Commands } from './components/Commands';

export const Test = () => {
  // TODO: fetch test with initial data
  // TODO: get the id from URL

  const actions = [
    { name: 'Run Test', onClick: () => {}, icon: 'test' },
    { name: 'Save', onClick: () => {}, flavor: 'secondary', icon: 'save' },
    { name: <ThreeDotsIcon />, onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  return (
    <>
      <PageHeader title="My Portfolio home page" actions={actions} />

      <Highlights>
        <Highlights.Item title="Status">
          <StatusBadge results={[]} />
        </Highlights.Item>
        <Highlights.Item title="Last Run">
          <TimerIcon />
          <span>Yesterday</span>
        </Highlights.Item>
        <Highlights.Item title="Url">
          <WorldIcon />
          <a
            href="https://alexandprivate.com"
            target="blank"
            className="underline decoration-dashed underline-offset-4">
            alexandprivate.com
          </a>
        </Highlights.Item>
        <Highlights.Item title="Created">
          <TimerIcon />
          <span>3 months ago</span>
        </Highlights.Item>
        <Highlights.Item title="Last Update">
          <TimerIcon />
          <span>3 months ago</span>
        </Highlights.Item>
        <Highlights.Item title="Scheduled run">
          <TimerIcon />
          <span>Daily at 11:00 am</span>
        </Highlights.Item>
      </Highlights>

      <Commands />
    </>
  );
};

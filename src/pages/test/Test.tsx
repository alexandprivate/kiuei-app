import { PageHeader, PageHeaderProps } from '../../components/pageHeader/PageHeader';
import { BsThreeDots } from 'react-icons/bs';
import { Highlights } from '../../components/highlights/Highlights';
import { Commands } from './components/Commands';
import { StatusBadge } from '../../components/statusBadge/StatusBadge';
import { CiTimer } from 'react-icons/ci';
import { TfiWorld } from 'react-icons/tfi';

export const Test = () => {
  const actions = [
    { name: 'Run Test', onClick: () => {} },
    { name: 'Save', onClick: () => {}, flavor: 'secondary' },
    { name: <BsThreeDots />, onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  // fetch for id
  return (
    <div>
      <PageHeader title="My Portfolio home page" actions={actions} />

      <Highlights>
        <Highlights.Item title="Status">
          <StatusBadge status="passed" />
        </Highlights.Item>
        <Highlights.Item title="Created">
          <CiTimer />
          <span>3 months ago</span>
        </Highlights.Item>
        <Highlights.Item title="Last Run">
          <CiTimer />
          <span>Yesterday</span>
        </Highlights.Item>
        <Highlights.Item title="Url">
          <TfiWorld />
          <span>alexandprivate.com</span>
        </Highlights.Item>
        <Highlights.Item title="Scheduled">
          <CiTimer />
          <span>Daily at 11:00 am</span>
        </Highlights.Item>
        <Highlights.Item title="Last Update">
          <CiTimer />
          <span>3 months ago</span>
        </Highlights.Item>
      </Highlights>
      <Commands />
    </div>
  );
};

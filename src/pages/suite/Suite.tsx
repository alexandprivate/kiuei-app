import { BsThreeDots } from 'react-icons/bs';
import { PageHeader, PageHeaderProps } from '@/components/pageHeader/PageHeader';
import { ListHeader } from '@/components/listHeader/ListHeader';
import { Highlights } from '@/components/highlights/Highlights';
import { StatusBadge } from '@/components/statusBadge/StatusBadge';
import { CiTimer } from 'react-icons/ci';
import { OutlineWrapper } from '@/components/outlineWrapper/OutlineWrapper';

export const Suite = () => {
  const actions = [
    { name: 'Run Suite', onClick: () => {} },
    { name: 'Save', onClick: () => {}, flavor: 'secondary' },
    { name: <BsThreeDots />, onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  return (
    <>
      <PageHeader title="My sweet test suite" actions={actions} />
      <Highlights>
        <Highlights.Item title="Status">
          <StatusBadge status="passed" />
        </Highlights.Item>
        <Highlights.Item title="Last Run">
          <CiTimer />
          <span>Yesterday</span>
        </Highlights.Item>

        <Highlights.Item title="Created">
          <CiTimer />
          <span>3 months ago</span>
        </Highlights.Item>
        <Highlights.Item title="Last Update">
          <CiTimer />
          <span>3 months ago</span>
        </Highlights.Item>
        <Highlights.Item title="Scheduled run">
          <CiTimer />
          <span>Daily at 11:00 am</span>
        </Highlights.Item>
      </Highlights>
      <OutlineWrapper>
        <ListHeader
          title="Test"
          badgeValue={0}
          action={{ label: 'Add Test', onClick: () => null, icon: 'plus' }}
        />
      </OutlineWrapper>
    </>
  );
};

import { BsThreeDots } from 'react-icons/bs';
import { PageHeader, PageHeaderProps } from '../../components/pageHeader/PageHeader';
import { NumberBadge } from '../../components/numberBadge/NumberBadge';
import { Button } from '../../components/button/Button';
import { Highlights } from '../../components/highlights/Highlights';
import { StatusBadge } from '../../components/statusBadge/StatusBadge';
import { CiTimer } from 'react-icons/ci';
import { ListWrapper } from '../../components/listWrapper/ListWrapper';

const TestsListHeader = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-950/80 sticky top-0 py-5 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium">Test</span>
        <NumberBadge value={0} />
      </div>
      <Button flavor="secondary" icon="plus">
        Add Test
      </Button>
    </div>
  );
};

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
      <ListWrapper>
        <TestsListHeader></TestsListHeader>
      </ListWrapper>
    </>
  );
};

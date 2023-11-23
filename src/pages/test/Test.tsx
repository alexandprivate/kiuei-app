import { PageHeader, PageHeaderProps } from '../../components/pageHeader/PageHeader';
import { BsThreeDots } from 'react-icons/bs';
import { Highlights } from './components/Highlights';
import { Commands } from './components/Commands';

export const Test = () => {
  const actions = [
    { name: 'Run Test', onClick: () => {} },
    { name: 'Save', onClick: () => {}, flavor: 'secondary' },
    { name: <BsThreeDots />, onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  // fetch for id
  return (
    <div>
      <div className="mb-14">
        <PageHeader title="My Portfolio home page" actions={actions} />
      </div>
      <Highlights />
      <Commands />
    </div>
  );
};

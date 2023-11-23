import { BsThreeDots } from 'react-icons/bs';
import { PageHeader, PageHeaderProps } from '../../components/pageHeader/PageHeader';

export const Suite = () => {
  const actions = [
    { name: 'Save', onClick: () => {}, icon: 'plus' },
    { name: <BsThreeDots />, onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  return (
    <>
      <PageHeader title="My sweet test suite" actions={actions} />
    </>
  );
};

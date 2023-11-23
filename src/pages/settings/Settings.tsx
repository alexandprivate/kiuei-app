import { PageHeader, PageHeaderProps } from '../../components/pageHeader/PageHeader';

export const Settings = () => {
  const actions = [
    { name: 'Add Test', onClick: () => {}, icon: 'plus' },
    { name: 'Add Suite', onClick: () => {}, flavor: 'secondary' }
  ] as PageHeaderProps['actions'];

  return (
    <>
      <PageHeader title="Settings" actions={actions} />
    </>
  );
};

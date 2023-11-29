import { PageHeader, PageHeaderProps } from '@/components/pageHeader/PageHeader';

export const Settings = () => {
  const actions = [{ name: 'Save', onClick: () => {}, icon: 'save' }] as PageHeaderProps['actions'];

  return (
    <>
      <PageHeader title="Settings" actions={actions} />
    </>
  );
};

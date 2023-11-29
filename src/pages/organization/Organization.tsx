import { OutlineWrapper } from '@/components/outlineWrapper/OutlineWrapper';
import { PageHeader } from '@/components/pageHeader/PageHeader';
import { ListHeader } from '@/components/listHeader/ListHeader';

export const Organization = () => {
  return (
    <>
      <PageHeader title="Organization" />

      <OutlineWrapper>
        <ListHeader
          title="Members"
          badgeValue={0}
          action={{ label: 'Invite Members', onClick: () => null, icon: 'addUser' }}
        />
      </OutlineWrapper>
    </>
  );
};

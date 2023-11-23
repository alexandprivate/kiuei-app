import { Intro } from '../../components/intro/Intro';

export const Home = () => {
  const actions = [
    { name: 'Add Test', onClick: () => {} },
    { name: 'Add Suite', onClick: () => {}, flavor: 'secondary' }
  ];
  return (
    <>
      <Intro title="Dashboard" actions={actions} />
    </>
  );
};

import { Intro, IntroProps } from '../../components/intro/Intro';
import { BsThreeDots } from 'react-icons/bs';
import { Highlights } from './components/Highlights';
import { Commands } from './components/Commands';

export const Test = () => {
  const actions = [
    { name: 'Run Test', onClick: () => {}, flavor: 'primary' },
    { name: 'Save', onClick: () => {}, flavor: 'secondary' },
    { name: <BsThreeDots />, onClick: () => {}, flavor: 'secondary' }
  ] as IntroProps['actions'];

  // fetch for id
  return (
    <div>
      <div className="mb-14">
        <Intro title="My Portfolio home page" actions={actions} />
      </div>
      <Highlights />
      <Commands />
    </div>
  );
};

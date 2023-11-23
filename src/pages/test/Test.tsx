import { Intro, IntroProps } from '../../components/intro/Intro';
import { BsThreeDots } from 'react-icons/bs';
import { Highlights } from './components/Highlights';
import { Button } from '../../components/button/Button';
import { NumberBadge } from '../../components/numberBadge/NumberBadge';

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

      <div className="border border-zinc-800 mt-12 rounded-lg p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-medium">Commands</span>
            <NumberBadge value={0} />
          </div>
          <Button flavor="secondary">Add Command</Button>
        </div>
      </div>
    </div>
  );
};

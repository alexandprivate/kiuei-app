import { Input } from '@/components/input/Input';
import { Button } from '@/components/button/Button';
import { useSearchParams } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="fixed -bottom-48 h-96 w-1/3 bg-purple-950/20 rounded-full blur-3xl"></div>
      <div className="text-center flex flex-col gap-10 w-full max-w-sm">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-5xl">kiuei</h1>
          <p className="text-lg">Let's ship some automation!</p>
        </div>
        <form className="flex gap-4 flex-col">
          <Input
            placeholder="Email address"
            value={searchParams.get('email') || ''}
            onChange={(e) => {
              searchParams.set('email', e.target.value);
              setSearchParams(searchParams);
            }}
          />
          <Button className="w-full justify-center block">Sign In</Button>
        </form>
      </div>
    </div>
  );
};

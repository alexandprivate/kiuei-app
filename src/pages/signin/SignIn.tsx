import { Input } from '@/components/input/Input';
import { Button } from '@/components/button/Button';
import { useRef, useReducer } from 'react';
import { supabase } from '@/utils/supabase';

type State = {
  loading: boolean;
  error: boolean;
  success: boolean;
};

const initialState: State = {
  loading: false,
  error: false,
  success: false
};

const reducer = (current: State, update: Partial<State>) => ({ ...current, ...update });

export const SignIn: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [{ loading, error, success }, dispatch] = useReducer(reducer, initialState);

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ error: false, loading: true });
    const { email } = e.currentTarget;
    const emailRedirectTo = import.meta.env.VITE_EMAIL_REDIRECT_URL;

    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo
      }
    });

    if (error) {
      dispatch({ error: true, loading: false, success: false });
      return;
    }

    dispatch({ error: false, loading: false, success: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center flex flex-col gap-10 w-1/4 max-w-sm">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-5xl">kiuei</h1>
          <p className="text-lg">Let's ship some automation!</p>
        </div>
        <form className="flex gap-4 flex-col" ref={formRef} onSubmit={onSignIn}>
          <Input
            placeholder="Email address"
            type="email"
            required
            name="email"
            disabled={loading || success}
          />
          <Button
            type="submit"
            disabled={loading || success}
            showSpinner={loading}
            className="w-full justify-center block">
            Sign In
          </Button>
        </form>
        {success && <p className="text-green-400">Check your email :)</p>}
        {error && <p className="text-red-500">Something went wrong, try again</p>}
      </div>
    </div>
  );
};

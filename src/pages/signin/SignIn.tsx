import { Input } from '@/components/input/Input';
import { Button } from '@/components/button/Button';
import { useRef } from 'react';
import { supabase } from '@/utils/supabase';

export const SignIn: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = e.currentTarget;
    const emailRedirectTo = import.meta.env.VITE_EMAIL_REDIRECT_URL;

    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo
      }
    });

    if (error) {
      console.log({ error });
      return;
    }

    console.log('good');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="fixed -bottom-48 h-96 w-1/3 bg-purple-950/20 rounded-full blur-3xl"></div>
      <div className="text-center flex flex-col gap-10 w-full max-w-sm">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-5xl">kiuei</h1>
          <p className="text-lg">Let's ship some automation!</p>
        </div>
        <form className="flex gap-4 flex-col" ref={formRef} onSubmit={onSignIn}>
          <Input placeholder="Email address" type="email" required name="email" />
          <Button type="submit" className="w-full justify-center block">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

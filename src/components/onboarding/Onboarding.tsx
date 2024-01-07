import { Input } from '@/components/input/Input';
import { Button } from '@/components/button/Button';
import { useMutation } from '@tanstack/react-query';
import * as api from '@/api';
import { useSession } from '@/store/useSession';
import { useNavigate } from 'react-router-dom';

export const Onboarding = () => {
  const session = useSession((s) => s.session);
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationFn: (data: api.UserOnboard) => api.user.onboard(data),
    onSuccess: () => {
      api.client.refetchQueries({
        queryKey: ['user']
      });
      navigate('/tests');
    }
  });

  const onSubmitOnboardingDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userFullName, orgName, email, contactFullName } = e.currentTarget;

    mutate({
      name: orgName.value,
      email: email.value.length > 0 ? email.value : session?.user.email,
      contactFullName:
        contactFullName.value.length > 0 ? contactFullName.value : userFullName.value,
      userId: session?.user.id ?? '',
      plan: 0,
      userEmail: session?.user.email ?? '',
      userFullName: userFullName.value
    });

    console.log({ userFullName, name, email, contactFullName });
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-xl overflow-auto px-6">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl">Onboard</h2>
          <p className="text-zinc-400">
            Hi! it's always nice to have someone new! Let's get you onboard
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={onSubmitOnboardingDetails}>
          <h2>User Details</h2>
          <div>
            <Input required name="userFullName" placeholder="Your name" />
          </div>

          <h2 className="mt-4">Organization Details</h2>
          <div>
            <Input required name="orgName" placeholder="Organization's name" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <Input name="email" placeholder="Organization email" type="email" />
            <p className="text-zinc-400 italic">* If leave it blank, we will use your email</p>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              name="contactFullName"
              placeholder="Name for organization's main contact"
              type="text"
            />
            <p className="text-zinc-400 italic">* If leave it blank, we will use your name</p>
          </div>
          <Button type="submit" className="mt-4" showSpinner={status === 'pending'}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

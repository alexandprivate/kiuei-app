import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import { useSearchParams } from "react-router-dom";

const StepsIndicator = () => {
  return (
    // React steps indicator component
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <div className="w-4 h-4 rounded-full bg-zinc-100"/>
        <div className="w-4 h-4 rounded-full bg-zinc-100"/>
        <div className="w-4 h-4 rounded-full bg-zinc-100"/>
      </div>
    </div>
  );
}

export const Onboarding: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <StepsIndicator />

    </div>
  );
};

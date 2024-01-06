import { Button } from "@/components/button/Button";
import { supabase } from "@/utils/supabase";

export const TopBar = () => {
  return (
    <div className="border-b border-zinc-800 h-16 flex items-center justify-end px-8">
      <ul className="flex gap-5 items-center">
        <li>Feedback</li>
        <li>Help</li>
        <li>Docs</li>
        <li>
          <Button
            size="sm"
            flavor="secondary"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </Button>
        </li>
      </ul>
    </div>
  );
};

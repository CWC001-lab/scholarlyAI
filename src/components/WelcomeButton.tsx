import { useState } from 'react';
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function WelcomeButton() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    if (isSignedIn) {
      router.push('/welcome');
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="bg-[#0017A0] hover:bg-[#0017A0]/90 text-white"
      >
        Get Started
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign in or Sign up</DialogTitle>
            <DialogDescription>
              You need to be authenticated to access the Welcome page.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <SignInButton mode="modal">
              <Button className="w-full bg-[#0017A0] hover:bg-[#0017A0]/90 text-white">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="w-full bg-[#0017A0] hover:bg-[#0017A0]/90 text-white">
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

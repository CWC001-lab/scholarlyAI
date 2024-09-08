import { SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";

import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Navigation } from "./navigations";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md my-2 mx-4 flex justify-between items-center py-2">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        <Navigation />
      </div>
      <div className="flex items-center space-x-4">
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
        <UserButton />
      </div>
      </div>
  );
};

export default Navbar;
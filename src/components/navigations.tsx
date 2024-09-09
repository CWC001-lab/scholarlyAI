import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="py-4 px-6 sm:px-8 md:px-12 flex items-center justify-between">
      <div className="flex space-x-4">
        <button
          onClick={() => scrollToSection('home')}
          className={cn("text-gray-600 hover:text-gray-900", "font-medium")}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('features')}
          className={cn("text-gray-600 hover:text-gray-900", "font-medium")}
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection('pricing')}
          className={cn("text-gray-600 hover:text-gray-900", "font-medium")}
        >
          Pricing
        </button>


      </div>
    </nav>
  );
};
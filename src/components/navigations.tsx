import Image from "next/image";
import Link from "next/link";
import { Karla } from "next/font/google";
import { cn } from "@/lib/utils";

const karla = Karla({ subsets: ["latin"], weight: "500" });

export const Navigation = () => {
  return (
    <nav className="py-4 px-6 sm:px-8 md:px-12 flex items-center justify-between">
      <div className="flex space-x-4">
        <Link href="/">
          <span className={cn("text-gray-600 hover:text-gray-900", "font-medium")}>
            Home
          </span>
        </Link>
        <Link href="/features">
          <span className={cn("text-gray-600 hover:text-gray-900", "font-medium")}>
            Features
          </span>
        </Link>
        <Link href="/pricing">
          <span className={cn("text-gray-600 hover:text-gray-900", "font-medium")}>
            Pricing
          </span>
        </Link>
      </div>
    </nav>
  );
};
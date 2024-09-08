"use client";

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideSidebarPaths = ['/', '/welcome', '/sign-in', '/sign-up', '/intro'];
  const shouldHideSidebar = hideSidebarPaths.includes(pathname) || pathname.startsWith('/sign-up/') || pathname.startsWith('/intro/');

  return (
    <div className="flex">
      {!shouldHideSidebar && <Sidebar />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}

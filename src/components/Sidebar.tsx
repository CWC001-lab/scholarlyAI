"use client";

import Link from 'next/link';
import { UserButton, useUser } from "@clerk/nextjs";
import { AiOutlineDashboard, AiOutlineProject, AiOutlineFolder, AiOutlineBook, AiOutlineEdit, AiOutlineSafety, AiOutlineSetting, AiOutlineCustomerService } from 'react-icons/ai';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";

// Add this interface above the Sidebar component
interface Document {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Sidebar = () => {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userDocuments, setUserDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (user?.id) {
        const response = await fetch(`/api/documents?userId=${user.id}`);
        if (response.ok) {
          const documents = await response.json();
          setUserDocuments(documents);
        }
      }
    };
    fetchDocuments();
  }, [user]);

  const handleNewProject = () => {
    if (pathname === '/document/new') {
      setShowConfirmation(true);
    } else {
      router.push('/document');
    }
  };

  const handleConfirmNavigation = (confirm: boolean) => {
    setShowConfirmation(false);
    if (confirm) {
      router.push('/dashboard');
    }
  };

  const menuItems = [
    { icon: AiOutlineDashboard, label: 'Overview', href: '/dashboard' },
    { icon: AiOutlineProject, label: 'Projects', href: '/projects', subItems: userDocuments.map(doc => ({ label: doc.title, href: `/document/${doc.id}` })) },
    { icon: AiOutlineFolder, label: 'Resources', href: '/resources' },
    { icon: AiOutlineBook, label: 'Learning hub', href: '/learning' },
    { icon: AiOutlineEdit, label: 'Scratch pad', href: '/scratchpad' },
    { icon: AiOutlineSafety, label: 'Ethical guidance', href: '/ethics' },
    { icon: AiOutlineSetting, label: 'Settings', href: '/settings' },
    { icon: AiOutlineCustomerService, label: 'Support', href: '/support' },
  ];

  return (
    <aside className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <UserButton />
          <span className="font-medium truncate">{user?.username || "Guest User"}</span>
        </div>
      </div>

      <div className="p-4">
        <Button onClick={handleNewProject} className="w-full">
          New Project
        </Button>
      </div>

      <nav className="mt-6">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
              {item.subItems && (
                <ul className="ml-6">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.href} className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to leave? Your unsaved changes will be lost.</p>
            <div className="mt-4 flex justify-end space-x-2">
              <Button onClick={() => handleConfirmNavigation(false)} variant="outline">
                Cancel
              </Button>
              <Button onClick={() => handleConfirmNavigation(true)}>
                Leave
              </Button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { Share } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = (type: string) => {
    // Implement share functionality based on type
    console.log(`Sharing as ${type}`);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center">
          <Share className="mr-2 h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleShare('pdf')}>Share as PDF</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('email')}>Share via Email</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('link')}>Share via Link</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;

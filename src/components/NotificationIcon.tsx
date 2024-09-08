import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NotificationIcon = () => {
  return (
    <Button variant="outline" size="icon">
      <Bell className="h-4 w-4" />
    </Button>
  );
};

export default NotificationIcon;

import React, { useState } from 'react';
import { ChevronDown, Settings, X, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiLevel, setAiLevel] = useState('');
  const [language, setLanguage] = useState('');
  const [writingStyle, setWritingStyle] = useState('');

  const CustomSelect = ({ label, value, onChange, options, placeholder }: CustomSelectProps) => (
    <div className="flex items-center justify-between p-2">
      <div className="flex flex-col w-4/5">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-gray-500">{value || placeholder}</span>
      </div>
      <Select onValueChange={onChange}>
        <SelectTrigger className="border-none shadow-none p-0 w-1/5 flex justify-end">
          <SelectValue className="hidden" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between items-start mb-16">
          <h2 className="text-lg font-semibold">Settings</h2>
          <span className="text-sm text-gray-500">Update the document settings</span>
          {/* <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            Close
          </Button> */}
        </div>
        <div className="space-y-4">

          <CustomSelect
            label="AI Assistance Level"
            value={aiLevel}
            onChange={setAiLevel}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
            placeholder="Select level"
          />

          <CustomSelect
            label="Language"
            value={language}
            onChange={setLanguage}
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
            ]}
            placeholder="Select language"
          />

          <CustomSelect
            label="Writing Style"
            value={writingStyle}
            onChange={setWritingStyle}
            options={[
              { value: 'formal', label: 'Formal' },
              { value: 'casual', label: 'Casual' },
              { value: 'academic', label: 'Academic' },
              { value: 'creative', label: 'Creative' },
            ]}
            placeholder="Select writing style"
          />

          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="block">Outline Settings</span>
                    <span className="text-sm text-gray-500">Update the outline size</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Outline Settings</DialogTitle>
                  <DialogDescription>
                    Adjust the size and depth of your outline.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="outlineSize" className="text-right">
                      Size
                    </label>
                    <Input
                      id="outlineSize"
                      type="number"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="outlineDepth" className="text-right">
                      Depth
                    </label>
                    <Input
                      id="outlineDepth"
                      type="number"
                      className="col-span-3"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Privacy Settings */}
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="block">Privacy Settings</span>
                    <span className="text-sm text-gray-500">Manage Access</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Privacy Settings</DialogTitle>
                  <DialogDescription>
                    Manage your privacy preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <span>Data Collection</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Third-party Sharing</span>
                    <Switch />
                  </div>
                  <div>
                    <Select>
                      <label className="block mb-2">Data Retention</label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select data retention period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30days">30 days</SelectItem>
                        <SelectItem value="90days">90 days</SelectItem>
                        <SelectItem value="1year">1 year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Content Filtering */}
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="block">Content Filtering</span>
                    <span className="text-sm text-gray-500">Update your content filters</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Content Filtering</DialogTitle>
                  <DialogDescription>
                    Customize your content preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <span>Safe Search</span>
                    <Switch />
                  </div>
                  <div>
                    <Select>
                      <label className="block mb-2">Content Rating</label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select content rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="g">G (General)</SelectItem>
                        <SelectItem value="pg">PG (Parental Guidance)</SelectItem>
                        <SelectItem value="pg13">PG-13</SelectItem>
                        <SelectItem value="r">R (Restricted)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Block Explicit Content</span>
                    <Switch />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center justify-between">
            <span>Accessibility</span>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <span>Offline Mode</span>
            <Switch />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsButton;

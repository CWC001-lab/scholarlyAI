"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { geminiAI } from "@/utils/gemini-ai";
import { Loader } from "lucide-react";

interface DrawerProps {
  description: string | null;
  onImplement?: (content: string) => void;
}

const DrawerAI = ({ description, onImplement }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scholarlyAISuggestion, setScholarlyAISuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleScholarlyAISuggestion = async () => {
    setIsLoading(true);
    try {
      const response = await geminiAI(description!);
      setScholarlyAISuggestion(response);
      setIsOpen(true);
    } catch (error) {
      console.error("Error getting Gemini AI suggestion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleScholarlyAISuggestion}
        disabled={isLoading}
        className="bg-[#0017A0] hover:bg-[#0017A0]/90 text-white"
      >
        {isLoading ? <Loader className="animate-spin mr-2" /> : null}
        Ask Scholarly AI
      </Button>
      {isOpen && (
        <div
          ref={drawerRef}
          className="fixed right-0 top-[10%] w-[30%] h-[80%] bg-white shadow-lg overflow-y-auto p-4"
          style={{ zIndex: 1000 }}
        >
          <Button
            onClick={() => onImplement && onImplement(scholarlyAISuggestion)}
            className="mb-4 bg-[#0017A0] hover:bg-[#0017A0]/90 text-white"
          >
            Implement
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-[#0017A0] hover:bg-[#0017A0]/90 mb-4 ml-2"
          >
            x
          </Button>
          <div className="whitespace-pre-wrap">
            {scholarlyAISuggestion}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerAI;

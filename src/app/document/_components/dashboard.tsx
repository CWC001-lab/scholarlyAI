"use client";

import React, { useState } from "react";
// import Sidebar from "@/components/Sidebar";
import ProjectSteps from "./ProjectSteps";
import ProjectRequirements from "./ProjectRequirements";
import ProjectDescription from "./ProjectDescription";
import GenerateTasks from "./GenerateTasks";

export const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    id: '', // Add this line
    projectType: '',
    projectLanguage: '',
    projectDeadline: '',
    educationalLevel: '',
    pages: '',
    words: '',
    outline: '',
    outlineDepth: '',
    aiAssistance: '',
    fieldOfStudy: '',
    numberOfSources: '',
    aiSpeechLevel: '',
    projectDescription: '',
    dateFrom: '',
    dateTo: '',
  });

  const handleNextStep = (data: Partial<typeof projectData>) => {
    const updatedData = { ...projectData, ...data };
    setProjectData(updatedData);
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleComplete = () => {
    // Handle project creation completion
    console.log('Project created:', projectData);
    // You might want to reset the form or navigate to a different page here
  };

  return (
    <div className="flex h-screen bg-white text-black">
      {/* <Sidebar /> */}
      
      {/* Project Steps */}
      <ProjectSteps currentStep={currentStep} />

      <section className="w-3/4">
        <h2 className="mt-[70px] text-black text-start text-4xl font-bold">Create New Project</h2>
        <main className="mt-[6px] w-[90%] flex-grow p-6 bg-gray-100 overflow-y-auto">
          {currentStep === 1 && (
            <ProjectRequirements 
              projectData={projectData}
              onNext={handleNextStep}
            />
          )}
          {currentStep === 2 && (
            <ProjectDescription 
              projectData={projectData}
              onNext={handleNextStep}
              onPrevious={handlePreviousStep}
            />
          )}
          {currentStep === 3 && (
            <GenerateTasks 
              projectData={projectData}
              onComplete={handleComplete}
              onPrevious={handlePreviousStep}
            />
          )}
        </main>
      </section>
    </div>
  );
};

import React from 'react';

interface ProjectStepsProps {
  currentStep: number;
}

const ProjectSteps: React.FC<ProjectStepsProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Project requirements', description: 'Fill in your project requirements' },
    { number: 2, title: 'Project Description', description: 'Fill in details about your project' },
    { number: 3, title: 'Generate Tasks', description: 'Organise your project with AI assistance' },
  ];

  return (
    <div className="mt-[65px] w-1/4 bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Project Steps</h2>
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute top-0 left-4 w-0.5 h-full bg-gray-300 -z-10"></div>
        
        {steps.map((step) => (
          <div key={step.number} className="flex items-center mb-8">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10 ${
              currentStep >= step.number ? 'bg-blue-500' : 'bg-white border-2 border-gray-300 text-gray-500'
            }`}>
              {step.number}
            </div>
            <div className="ml-4">
              <span className="font-semibold">{step.title}:</span>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSteps;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Welcome: React.FC = () => {
  const router = useRouter();

  const handleCreateProject = () => {
    router.push('/document');
  };

  const handleSkip = () => {
    router.push('/document');
  };

  return (
    <div className="flex flex-row min-h-screen">

      
      <header className="w-2/5 bg-gradient-to-r from-blue-900 to-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">SCHOLARLY</h1>
      </header>

      <main className="w-3/5 bg-white text-black flex flex-col justify-between items-center p-6 min-h-screen">
        <div className="mt-[10%] w-[65%]">
          <h2 className="text-5xl font-bold mb-4">
            Accelerate your academic success with intelligent assistance
          </h2>
          <p className="text-lg mt-[5%]">
            Start by creating your first project to experience the full power of
            AI-driven education. If you are not ready yet, feel free to skip this
            step and explore.
          </p>
        </div>

        <div className="w-[65%]">
          <p className="mb-4">
            Need guidance? Check out our{' '}
            <a href="#" className="underline text-blue-600">
              &apos;How to use&apos; section
            </a>{' '}
            for tips on maximizing your experience.
          </p>  

          <button 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md mb-2"
            onClick={handleCreateProject}
          >
            Create your first project
          </button>

          <button 
            className="w-full bg-transparent text-blue-500 font-bold py-2 px-4 rounded shadow-md hover:bg-blue-100"
            onClick={handleSkip}
          >
            Skip for now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
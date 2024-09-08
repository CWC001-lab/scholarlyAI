'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar'; // Adjust the import path as necessary
import TaskList from '@/components/TaskList';

const ProjectCheckPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-white text-black">
      <Sidebar />





      {/* Project Steps */}
      <div className="mt-[65px] w-1/5 bg-white p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Project Steps</h2>
        <div className="relative">
          {/* Continuous vertical line */}
          <div className="absolute top-0 left-4 w-0.5 h-full bg-gray-300 -z-10"></div>
          
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
              1
            </div>
            <div className="ml-4">
            <span className="font-semibold">Project requirements:</span>
            <p>Fill in your project requirements</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-blue-500 border-2 border-gray-300 rounded-full flex items-center justify-center text-white font-bold z-10">
              2
            </div>
            <div className="ml-4">
            <span className="font-semibold">Project Description:</span>
            <p>Fill in details about your project</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 border-2 border-gray-300 rounded-full flex items-center justify-center text-white font-bold z-10">
              3
            </div>
            <div className="ml-4">
            <span className="font-semibold">Generate Tasks:</span>
            <p>Organise your project with AI assistance</p>
            </div>
          </div>
        </div>
      </div>



      <section className='w-[40%]'>
        <h2 className="mt-[70px] text-black text-start text-4xl font-bold">Create New Project</h2>
        <main className="mt-[6px] w-[140%] flex-grow p-6 bg-gray-100">
          <div className="flex justify-center">
            <div className="w-4/5 h-[calc(100vh-200px)] overflow-y-auto">
              <TaskList />
            </div>
          </div>
        </main>
          <div className="flex justify-center mt-4 space-x-4">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {/* Add regenerate functionality */}}
            >
              Regenerate
            </button>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {/* Add save functionality */}}
            >
              Save
            </button>
          </div>
      </section>






    </div>
  );
};

export default ProjectCheckPage;

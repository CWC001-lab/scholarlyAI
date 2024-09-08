"use client"

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';  // Change this import
import Sidebar from '../../components/Sidebar';


const CreatePage: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectType: '',
    projectLanguage: '',
    projectDeadline: '',
    educationalLevel: '',
    pages: '',
    words: '',
    outline: '',
    outlineDepth: '',
    aiAssistance: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value !== '');
  };

  const handleProceed = () => {
    if (isFormValid()) {
      router.push('/create-page/projectDescription');
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (
    <div className="flex h-screen bg-white text-black">
      <Sidebar />
      
      {/* Project Steps */}
      <div className="mt-[65px] w-1/4 bg-white p-4 overflow-y-auto">
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
            <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold z-10">
              2
            </div>
            <div className="ml-4">
            <span className="font-semibold">Project Description:</span>
            <p>Fill in details about your project</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold z-10">
              3
            </div>
            <div className="ml-4">
            <span className="font-semibold">Generate Tasks:</span>
            <p>Organise your project with AI assistance</p>
            </div>
          </div>
        </div>
      </div>




<section>
<h2 className="mt-[70px] text-black text-start text-4xl font-bold">Create New Project</h2>
      <main className="mt-[6px] w-[90%] flex-grow p-6 bg-gray-100 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-black font-bold">Project type:</label>
            <select 
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] text-black font-semibold"
            >
              <option value="">Select project type</option>
              <option value="Red">red</option>
              {/* Add more options here */}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black font-bold">Project language:</label>
            <select 
              name="projectLanguage"
              value={formData.projectLanguage}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] text-black font-semibold"
            >
              <option value="">Select language</option>
              <option value="Engish">English</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-black font-bold">Project deadline:</label>
            <input
              type="date"
              name="projectDeadline"
              value={formData.projectDeadline}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] text-black font-semibold"
              placeholder="Your deadline"
            />
          </div>
          <div>
            <label className="block mb-2 text-black font-bold">Educational level:</label>
            <select 
              name="educationalLevel"
              value={formData.educationalLevel}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] text-black font-semibold"
            >
              <option value="">Select educational level</option>
              <option value="SSCE">SSCE</option>
            </select>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 text-black">Generate Tasks</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-black font-bold">Project size:</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleInputChange}
                className="border w-full p-4 rounded-[10px] text-black font-semibold"
                placeholder="Pages"
              />
              <input
                type="number"
                name="words"
                value={formData.words}
                onChange={handleInputChange}
                className="border w-full p-4 rounded-[10px] text-black font-semibold"
                placeholder="Words"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-black font-bold">Outline size:</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="outline"
                value={formData.outline}
                onChange={handleInputChange}
                className="border w-full p-4 rounded-[10px] text-black font-semibold"
                placeholder="Outline"
              />
              <input
                type="number"
                name="outlineDepth"
                value={formData.outlineDepth}
                onChange={handleInputChange}
                className="border w-full p-4 rounded-[10px] text-black font-semibold"
                placeholder="Outline depth"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-black font-bold">AI Assistance level:</label>
          <select 
            name="aiAssistance"
            value={formData.aiAssistance}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] text-black font-semibold"
          >
            <option value="">Select AI Assistance level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

      </main>
        <button 
          onClick={handleProceed}
          className="mt-7 mr-12 bg-blue-500 text-white py-4 px-6 rounded w-[15%] mx-auto block shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Proceed 
        </button>
</section>
    </div>
  );
};

export default CreatePage;
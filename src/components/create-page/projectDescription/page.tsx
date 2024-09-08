"use client"

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';  // Change this i
import Sidebar from '../../../components/Sidebar';

const Page: React.FC = () => {


  const router = useRouter();
  const [formData, setFormData] = useState({
    fieldOfStudy: '',
    numberOfSources: '',
    aiSpeechLevel: '',
    projectDescription: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return Object.entries(formData).every(([key, value]) => {
      if (key === 'projectDescription') {
        return value.trim().length > 0 && value.trim().length <= 1000;
      }
      return value.trim() !== '';
    });
  };

  const handleProceed = () => {
    if (isFormValid()) {
      router.push('/create-page/projectDescription/projectCheck');
    } else {
      alert('Please fill in all fields correctly before proceeding.');
    }
  };

  const handlePrevious = () => {
    router.back();
  };

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




<section className='w-[40%]'>
<h2 className="mt-[70px] text-black text-start text-4xl font-bold">Create New Project</h2>
      <main className="mt-[6px] w-[140%] flex-grow p-6 bg-gray-100 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
         
         
         
         
         
        <div className="col-span-2">
  <label className="block mb-2 text-black font-bold">Project Description:</label>
  <textarea 
    name="projectDescription"
    value={formData.projectDescription || ''}
    onChange={handleInputChange}
    className="border w-full p-4 rounded-[10px] text-black font-semibold resize-none"
    placeholder="Enter project details here"
    maxLength={1000}
    rows={5}
  />
  <div className="text-right text-sm text-gray-500 mt-1">
    {(formData.projectDescription?.length || 0)}/1000 characters
  </div>
</div>






          
          <div>
            <label className="block mb-2 text-black font-bold">Field of Study:</label>
            <select 
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] text-black font-semibold"
            >
              <option value="">Select Field of Study</option>
              <option value="English">English</option>
            </select>
          </div>



          <div>
            <label className="block mb-2 text-black font-bold">Number of Sources:</label>
            <select 
              name="numberOfSources"
              value={formData.numberOfSources}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] text-black font-semibold"
            >
              <option value="">Select Number of Sources</option>
              <option value="English">English</option>
            </select>
          </div>




          <div className="w-[100%] col-span-2">
            <label className="block mb-2 text-black font-bold">Citation range:</label>

            <div className="flex space-x-8">
              <div className="w-1/2">
                <label className="block mb-2  text-black font-bold">From:</label>
                <select 
                  name="dateFrom"
                  value={formData.dateFrom}
                  onChange={handleInputChange}
                  className="border w-full p-4 rounded-[10px] text-black font-semibold"
                >
                  <option value="">From</option>
                  {Array.from({length: 25}, (_, i) => 2000 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="w-1/2">
                <label className="block mb-2 text-black font-bold">To:</label>
                <select 
                  name="dateTo"
                  value={formData.dateTo}
                  onChange={handleInputChange}
                  className="border w-full p-4 rounded-[10px] text-black font-semibold"
                >
                  <option value="">To</option>
                  {Array.from({length: 25}, (_, i) => 2000 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>


          <div className="col-span-2">
          <label className="block mb-2 text-black font-bold">Writing Style:</label>
          <select 
            name="aiSpeechLevel"
            value={formData.aiSpeechLevel}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] text-black font-semibold"
          >
            <option value="">Formal</option>
            <option value="Informal">Informal</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>





        </div>




      </main>

      <div className='flex justify-end'>

      <button 
          onClick={handlePrevious}
          className="mt-7 mr-4 bg-gray-500 text-black py-4 px-6 rounded w-[20%] mx-auto block shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Previous 
        </button>

        <button 
          onClick={handleProceed}
          className="mt-7 bg-blue-500 text-white py-4 px-6 rounded w-[20%] mx-auto block shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Proceed 
        </button>
      </div>

</section>
    </div>
  );
};

export default Page;

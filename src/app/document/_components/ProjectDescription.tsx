import React, { useState } from 'react';

interface ProjectData {
  fieldOfStudy: string;
  numberOfSources: string;
  aiSpeechLevel: string;
  projectDescription: string;
  dateFrom: string;
  dateTo: string;
}

interface ProjectDescriptionProps {
  projectData: ProjectData;
  onNext: (data: ProjectData) => void;
  onPrevious: () => void;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ projectData, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<ProjectData>({
    fieldOfStudy: projectData.fieldOfStudy || '',
    numberOfSources: projectData.numberOfSources || '',
    aiSpeechLevel: projectData.aiSpeechLevel || '',
    projectDescription: projectData.projectDescription || '',
    dateFrom: projectData.dateFrom || '',
    dateTo: projectData.dateTo || ''
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
      onNext(formData);
    } else {
      alert('Please fill in all fields correctly before proceeding.');
    }
  };

  return (
    <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
      <h2 className="text-black text-start text-4xl font-bold mb-6">Create New Project</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2">
          <label className="block mb-2 text-black font-bold">Project Description:</label>
          <textarea 
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] text-black font-semibold resize-none"
            placeholder="Enter project details here"
            maxLength={1000}
            rows={5}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {formData.projectDescription.length}/1000 characters
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
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Engineering">Engineering</option>
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
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11+">11+</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 text-black font-bold">Citation range:</label>
          <div className="flex space-x-8">
            <div className="w-1/2">
              <label className="block mb-2 text-black font-bold">From:</label>
              <select 
                name="dateFrom"
                value={formData.dateFrom}
                onChange={handleInputChange}
                className="border w-full p-4 rounded-[10px] text-black font-semibold"
              >
                <option value="">From</option>
                {Array.from({length: 25}, (_, i) => 2000 + i).map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
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
                  <option key={year} value={year.toString()}>{year}</option>
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
            <option value="">Select Writing Style</option>
            <option value="Formal">Formal</option>
            <option value="Informal">Informal</option>
            <option value="Academic">Academic</option>
          </select>
        </div>
      </div>

      <div className='flex justify-end'>
        <button 
          onClick={onPrevious}
          className="mt-7 mr-4 bg-gray-500 text-black py-4 px-6 rounded w-[20%] shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Previous 
        </button>
        <button 
          onClick={handleProceed}
          className="mt-7 bg-blue-500 text-white py-4 px-6 rounded w-[20%] shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Proceed 
        </button>
      </div>
    </div>
  );
};

export default ProjectDescription;

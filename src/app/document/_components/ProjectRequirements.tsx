import React, { useState } from 'react';

interface ProjectData {
  projectType: string;
  projectLanguage: string;
  projectDeadline: string;
  educationalLevel: string;
  pages: string;
  words: string;
  outline: string;
  outlineDepth: string;
  aiAssistance: string;
}

interface ProjectRequirementsProps {
  projectData: ProjectData;
  onNext: (data: ProjectData) => void;
}

const ProjectRequirements: React.FC<ProjectRequirementsProps> = ({ projectData, onNext }) => {
  const [formData, setFormData] = useState(projectData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: typeof projectData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleProceed = () => {
    const requiredFields = ['projectType', 'projectLanguage', 'projectDeadline', 'educationalLevel', 'aiAssistance'] as const;
    const isValid = requiredFields.every(field => formData[field] && formData[field] !== '');

    if (isValid) {
      onNext(formData);
    } else {
      alert('Please fill in all required fields before proceeding.');
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Project Requirements</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-bold">Project type:</label>
          <select 
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] font-semibold"
          >
            <option value="">Select project type</option>
            <option value="Essay">Essay</option>
            <option value="Research Paper">Research Paper</option>
            <option value="Thesis">Thesis</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold">Project language:</label>
          <select 
            name="projectLanguage"
            value={formData.projectLanguage}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] font-semibold"
          >
            <option value="">Select language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold">Project deadline:</label>
          <input
            type="date"
            name="projectDeadline"
            value={formData.projectDeadline}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] font-semibold"
          />
        </div>
        <div>
          <label className="block mb-2 font-bold">Educational level:</label>
          <select 
            name="educationalLevel"
            value={formData.educationalLevel}
            onChange={handleInputChange}
            className="border w-full p-4 rounded-[10px] font-semibold"
          >
            <option value="">Select educational level</option>
            <option value="High School">High School</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
          </select>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">Generate Tasks</h3>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-bold">Project size:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="pages"
              value={formData.pages}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] font-semibold"
              placeholder="Pages"
            />
            <input
              type="number"
              name="words"
              value={formData.words}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] font-semibold"
              placeholder="Words"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-bold">Outline size:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="outline"
              value={formData.outline}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] font-semibold"
              placeholder="Outline"
            />
            <input
              type="number"
              name="outlineDepth"
              value={formData.outlineDepth}
              onChange={handleInputChange}
              className="border w-full p-4 rounded-[10px] font-semibold"
              placeholder="Outline depth"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">AI Assistance level:</label>
        <select 
          name="aiAssistance"
          value={formData.aiAssistance}
          onChange={handleInputChange}
          className="border w-full p-4 rounded-[10px] font-semibold"
        >
          <option value="">Select AI Assistance level</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button 
        onClick={handleProceed}
        className="mt-7 bg-blue-500 text-white py-4 px-6 rounded w-[15%] block shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        Proceed 
      </button>
    </div>
  );
};

export default ProjectRequirements;

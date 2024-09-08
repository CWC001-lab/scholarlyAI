import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface TaskCardProps {
  title: string;
  description: string;
  deadline: string;
  status: string;
  assistanceLevel: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, deadline, status, assistanceLevel }) => {
  return (
    <div className="bg-gray-100 w-[100%] shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <FaTrashAlt />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mt-2">{description}</p>

      <hr />

      <div className="mt-4 flex justify-between">
        <p className="text-l text-gray-500">Deadline: {deadline}</p>
        <p className="text-l text-gray-500">Status: {status}</p>
        <p className="text-l text-gray-500">AI Assistance level: {assistanceLevel}</p>
      </div>
    </div>
  );
};

export default TaskCard;
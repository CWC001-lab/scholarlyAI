import React, { useState, useEffect } from 'react';
import TaskList from '@/components/TaskList';

interface GenerateTasksProps {
  projectData: any;
  onPrevious: () => void;
  onComplete: () => void;
}

const GenerateTasks: React.FC<GenerateTasksProps> = ({ projectData, onPrevious, onComplete }) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log('GenerateTasks - Received projectData:', projectData);

  useEffect(() => {
    const createProjectAndGenerateTasks = async () => {
      if (!projectData) {
        setError('Project data is missing');
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const createdProject = await createProject(projectData);
        if (!createdProject) {
          throw new Error('Failed to create project');
        }
        const generatedTasks = await generateTasksBasedOnProjectData(createdProject);
        await saveTasks(generatedTasks, createdProject.id);
        setTasks(generatedTasks);
      } catch (err) {
        setError(`Failed to create project or generate tasks: ${err instanceof Error ? err.message : 'Unknown error'}`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    createProjectAndGenerateTasks();
  }, [projectData]);

  const generateTasksBasedOnProjectData = async (projectData: any): Promise<any[]> => {
    const response = await fetch('/api/generate-tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error('Failed to generate tasks');
    }

    const tasks = await response.json();
    console.log('Generated tasks:', tasks);
    return tasks;
  };

  const saveTasks = async (tasks: any[], projectId: string) => {
    try {
      console.log('Saving tasks:', tasks);
      console.log('Project ID:', projectId);
      const response = await fetch('/api/save-tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tasks: tasks.map(task => ({
            ...task,
            title: task.title || 'Untitled Task',
            description: task.description || 'No description provided',
            deadline: formatDate(task.estimated_deadline || task.deadline) || new Date().toISOString(),
            status: task.status || 'Not Started',
            assistanceLevel: task.ai_assistance_level || task.assistanceLevel || 'Medium',
          })),
          projectId,
        }),
      });

      const data = await response.json();
      console.log('Save tasks response:', data);

      if (!response.ok) {
        console.error('Error saving tasks:', data);
        throw new Error(data.error || 'Failed to save tasks');
      }

      return data;
    } catch (error) {
      console.error('Error in saveTasks:', error);
      throw error;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date.toISOString();
  };

  const handleRegenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!projectData.id) {
        throw new Error('Project ID is missing');
      }
      const generatedTasks = await generateTasksBasedOnProjectData(projectData);
      await saveTasks(generatedTasks, projectData.id);
      setTasks(generatedTasks);
    } catch (err) {
      setError(`Failed to regenerate tasks: ${err instanceof Error ? err.message : 'Unknown error'}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const taskContent = tasks.map((task, index) => `Task ${index + 1}: ${task.title}\nDescription: ${task.description}\nDeadline: ${task.deadline}\n\n`).join('');
      const response = await fetch('/api/document/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `${projectData.projectType} Tasks`,
          description: taskContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create new document');
      }

      const data = await response.json();
      window.location.href = `/document/${data.id}`;
    } catch (error) {
      console.error('Error saving tasks to new document:', error);
      setError(error instanceof Error ? error.message : 'Failed to save tasks to new document');
    }
  };

  if (isLoading) return <div>Generating tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Generated Tasks</h2>
      <TaskList tasks={tasks} />
      <div className="flex justify-between mt-6">
        <button onClick={onPrevious} className="bg-gray-500 text-white py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={handleRegenerate} className="bg-yellow-500 text-white py-2 px-4 rounded">
          Regenerate
        </button>
        <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

const createProject = async (projectData: any): Promise<any> => {
  const response = await fetch('/api/create-project', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    throw new Error('Failed to create project');
  }

  const createdProject = await response.json();
  return { ...projectData, id: createdProject.id };
};

export default GenerateTasks;

import React from 'react';
import TaskCard from './TaskCard';

interface Task {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  assistanceLevel: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="flex flex-col space-y-4">
      {tasks.map((task) => (
        <TaskCard 
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          status={task.status}
          assistanceLevel={task.assistanceLevel}
        />
      ))}
    </div>
  );
};

export default TaskList;
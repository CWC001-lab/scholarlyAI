import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { tasks, projectId } = await request.json();
    
    if (!Array.isArray(tasks) || tasks.length === 0) {
      return NextResponse.json({ error: 'Invalid tasks data' }, { status: 400 });
    }

    if (!projectId) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    const savedTasks = await prisma.task.createMany({
      data: tasks.map((task: any) => ({
        projectId,
        title: task.title || 'Untitled Task',
        description: task.description || 'No description provided',
        deadline: new Date(task.estimated_deadline || task.deadline || new Date()),
        status: task.status || 'Not Started',
        assistanceLevel: task.ai_assistance_level || task.assistanceLevel || 'Medium',
      })),
    });

    return NextResponse.json(savedTasks);
  } catch (error) {
    console.error('Error saving tasks:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Failed to save tasks', details: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to save tasks', details: 'Unknown error' }, { status: 500 });
  }
}

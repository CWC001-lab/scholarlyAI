import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const urgentProjects = await db.project.findMany({
      where: {
        userId,
        projectDeadline: { lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) } // Within next 7 days
      },
      select: {
        id: true,
        projectType: true,
        projectDeadline: true,
        tasks: {
          select: {
            status: true
          }
        }
      },
      orderBy: {
        projectDeadline: 'asc'
      },
      take: 5 // Limit to 5 most urgent projects
    });

    const projectsWithProgress = urgentProjects.map(project => ({
      projectType: project.projectType,
      projectDeadline: project.projectDeadline,
      progress: (project.tasks.filter(task => task.status === 'Completed').length / project.tasks.length) * 100 || 0
    }));

    return NextResponse.json(projectsWithProgress);
  } catch (error) {
    console.error('Error fetching urgent projects:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

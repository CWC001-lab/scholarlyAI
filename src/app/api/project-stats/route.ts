import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const projects = await db.project.count({ where: { userId } });
    const ongoing = await db.project.count({
      where: {
        userId,
        tasks: { some: { status: { not: 'Completed' } } }
      }
    });
    const completed = await db.task.count({
      where: {
        project: { userId },
        status: 'Completed'
      }
    });
    const overdue = await db.task.count({
      where: {
        project: { userId },
        deadline: { lt: new Date() },
        status: { not: 'Completed' }
      }
    });

    return NextResponse.json({ projects, ongoing, completed, overdue });
  } catch (error) {
    console.error('Error fetching project stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

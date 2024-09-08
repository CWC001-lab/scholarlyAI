import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const completed = await db.task.count({
      where: {
        project: { userId },
        status: 'Completed'
      }
    });
    const ongoing = await db.task.count({
      where: {
        project: { userId },
        status: { not: 'Completed' }
      }
    });
    const overdue = await db.task.count({
      where: {
        project: { userId },
        deadline: { lt: new Date() },
        status: { not: 'Completed' }
      }
    });

    return NextResponse.json({ completed, ongoing, overdue });
  } catch (error) {
    console.error('Error fetching project activity:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

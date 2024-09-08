import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const projects = await db.project.findMany({
      where: { userId },
      select: {
        id: true,
        projectType: true,
        projectDeadline: true
      }
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching project deadlines:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

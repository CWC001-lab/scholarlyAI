import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, description } = await request.json();

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newDocument = await prisma.document.create({
      data: {
        title,
            description: description || '',
            userId,
      },
    });

    return NextResponse.json(newDocument);
  } catch (error) {
    console.error('Error creating new document:', error);
    return NextResponse.json({ error: 'Failed to create new document' }, { status: 500 });
  }
}

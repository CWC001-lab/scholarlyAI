import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const projectData = await request.json();
    
    const createdProject = await prisma.project.create({
      data: {
        userId: userId,
        projectType: projectData.projectType,
        projectLanguage: projectData.projectLanguage,
        projectDeadline: projectData.projectDeadline ? new Date(projectData.projectDeadline) : new Date(),
        educationalLevel: projectData.educationalLevel,
        pages: projectData.pages ? parseInt(projectData.pages) : null,
        words: projectData.words ? parseInt(projectData.words) : null,
        outline: projectData.outline ? parseInt(projectData.outline) : null,
        outlineDepth: projectData.outlineDepth ? parseInt(projectData.outlineDepth) : null,
        aiAssistance: projectData.aiAssistance,
        fieldOfStudy: projectData.fieldOfStudy,
        numberOfSources: projectData.numberOfSources,
        aiSpeechLevel: projectData.aiSpeechLevel,
        projectDescription: projectData.projectDescription,
        dateFrom: projectData.dateFrom,
        dateTo: projectData.dateTo,
      },
    });

    return NextResponse.json(createdProject);
  } catch (error) {
    console.error('Error creating project:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Failed to create project', details: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

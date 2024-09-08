import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(request: Request) {
  try {
    const projectData = await request.json();
    console.log('Received project data:', projectData);
    console.log('Project Data:', JSON.stringify(projectData, null, 2));
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Generate a list of tasks for a ${projectData.projectType} project with the following details:
    - Language: ${projectData.projectLanguage}
    - Deadline: ${projectData.projectDeadline}
    - Educational Level: ${projectData.educationalLevel}
    - Project Size: ${projectData.pages} pages, ${projectData.words} words
    - Outline: ${projectData.outline} sections, ${projectData.outlineDepth} depth
    - AI Assistance Level: ${projectData.aiAssistance}
    - Field of Study: ${projectData.fieldOfStudy}
    - Number of Sources: ${projectData.numberOfSources}
    - Writing Style: ${projectData.aiSpeechLevel}
    - Project Description: ${projectData.projectDescription}
    - Date Range: From ${projectData.dateFrom} to ${projectData.dateTo}

    For each task, provide:
    1. Title
    2. Description
    3. Estimated deadline (based on the project deadline)
    4. Status (always "Not Started" for new tasks)
    5. AI Assistance Level (Low, Medium, or High)

    Format the response as a JSON array of task objects.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let tasks;
    try {
      const rawText = response.text();
      const jsonString = rawText.replace(/^```json\n|\n```$/g, '');
      tasks = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      console.log('Raw response:', response.text());
      return NextResponse.json({ error: 'Failed to parse generated tasks' }, { status: 500 });
    }

    console.log('Generated tasks:', tasks);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error generating tasks:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Failed to generate tasks', details: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Failed to generate tasks', details: 'An unknown error occurred' }, { status: 500 });
    }
  }
}

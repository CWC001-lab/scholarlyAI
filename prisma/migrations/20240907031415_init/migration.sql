-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectType" TEXT NOT NULL,
    "projectLanguage" TEXT NOT NULL,
    "projectDeadline" TIMESTAMP(3) NOT NULL,
    "educationalLevel" TEXT NOT NULL,
    "pages" INTEGER,
    "words" INTEGER,
    "outline" INTEGER,
    "outlineDepth" INTEGER,
    "aiAssistance" TEXT NOT NULL,
    "fieldOfStudy" TEXT NOT NULL,
    "numberOfSources" TEXT NOT NULL,
    "aiSpeechLevel" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "dateFrom" TEXT NOT NULL,
    "dateTo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "assistanceLevel" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

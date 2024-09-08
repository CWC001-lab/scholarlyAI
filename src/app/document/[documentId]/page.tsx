import EditorBlock from "./_components/editor-block";
import { db } from "@/utils/db";

export default async function DocumentPage({
  params,
}: {
  params: { documentId: string };
}) {
  const document = await db.document.findUnique({
    where: {
      id: params.documentId,
    },
  });

  const mappedDocument = document ? {
    ...document,
    createAt: document.createdAt,
    updateAt: document.updatedAt
  } : null;

  return <EditorBlock document={mappedDocument} />;
}

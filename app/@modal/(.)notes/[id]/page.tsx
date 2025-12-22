import NotePreviewClient from "./NotePreview.client";
import { fetchNoteById } from "@/lib/api";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ id: string }>;
};

async function NotePreview({ params }: Props) {
  const queryClient = new QueryClient();

  const { id } = await params;
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreviewClient />
      </HydrationBoundary>
    </>
  );
}

export default NotePreview;

import { Metadata } from "next";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  if (!tag) {
    return {
      title: "All notes",
      description: "All notes selected",
      openGraph: {
        title: `All notes`,
        description: "All notes selected",
        url: "https://your-domain.com",
        images: [
          {
            url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
            width: 1200,
            height: 630,
            alt: "Unfiltered notes",
          },
        ],
      },
    };
  }
  return {
    title: `${tag} notes`,
    description: `Filtered by tag "${tag}" notes`,
    openGraph: {
      title: `${tag} notes`,
      description: `This notes filtered by tag "${tag}"`,
      url: "https://your-domain.com",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "Filtered notes",
        },
      ],
    },
  };
}

export default async function NotesByTags({ params }: Props) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes(1, "", tag),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient tag={tag} />
      </HydrationBoundary>
    </>
  );
}

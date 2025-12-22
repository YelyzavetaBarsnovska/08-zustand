"use client";
import css from "../../NotePreview.module.css";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useParams } from "next/navigation";
import { Note } from "@/types/note";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });
  const router = useRouter();
  const close = () => router.back();

  if (!data) return null;

  return (
    <>
      <Modal onClose={close}>
        <div className={css.container}>
          {isError && <p>Something went wrong.</p>}
          {isLoading && <p>Preview loading, please wait...</p>}

          {data && (
            <div className={css.item}>
              <h2>{data.title}</h2>
              <p className={css.content}>{data.content}</p>
              <p className={css.date}>Created date: {data.createdAt}</p>
              <p className={css.tag}>{data.tag}</p>
            </div>
          )}
          <button onClick={close}>Close</button>
        </div>
      </Modal>
    </>
  );
}

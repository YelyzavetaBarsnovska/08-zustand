"use client";

import css from "./NoteDetails.module.css";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NoteDetailsClient() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id as string),
    refetchOnMount: false,
  });

  {
    isLoading && <p>Note details loading, please wait...</p>;
    isError && <p>Something went wrong.</p>;
  }

  if (!data) return null;

  return (
    <>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{data.title}</h2>
          </div>
          <p className={css.content}>{data.content}</p>
          <p className={css.date}>Created date: {data.createdAt}</p>
          <p className={css.tag}>{data.tag}</p>
        </div>
      </div>
    </>
  );
}

"use client";

import css from "@/app/page.module.css";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import type { Note } from "@/types/note";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface NotesClientProps {
  tag: string | undefined;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  const [debouncedSearch] = useDebounce(search, 300);

  const { data } = useQuery<FetchNotesResponse>({
    queryKey: ["notes", currentPage, debouncedSearch, tag],
    queryFn: () => fetchNotes(currentPage, debouncedSearch, tag),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    if (data && data.notes.length === 0) {
      toast.error("No notes found.");
    }
  }, [data]);

  if (!data) return null;

  return (
    <div className={css.app}>
      <div className={css.toolbar}>
        <SearchBox onChange={setSearch} />
        {data && data.totalPages > 1 && (
          <Pagination
            pageCount={data.totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
        <Link href="/notes/action/create" className={css.createNoteLink}>
          Create note +
        </Link>
      </div>
      {data.notes.length > 0 && <NoteList notes={data.notes} />}
      <Toaster />
    </div>
  );
}

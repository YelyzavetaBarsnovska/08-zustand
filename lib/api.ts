import axios from "axios";
import type { Note, NoteFormValues } from "@/types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
  tag?: string;
}

export async function fetchNotes(
  page: number = 1,
  search: string = "",
  tag: string | undefined
): Promise<FetchNotesResponse> {
  const response = await axios.get<FetchNotesResponse>(
    "https://notehub-public.goit.study/api/notes",
    {
      params: {
        page,
        perPage: 10,
        search: search || undefined,
        tag,
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
}

export async function createNote(noteValues: NoteFormValues): Promise<Note> {
  const response = await axios.post<Note>(
    "https://notehub-public.goit.study/api/notes/",
    noteValues,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  console.log(response.data);
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await axios.get<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );
  return response.data;
}

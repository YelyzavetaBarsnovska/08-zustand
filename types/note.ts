export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag | undefined;
  createdAt: string;
  updatedAt: string;
}

export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface NoteFormValues {
  title: string;
  content: string;
  tag: NoteTag;
}

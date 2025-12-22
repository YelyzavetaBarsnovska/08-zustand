import { create } from "zustand";
import type { NoteFormValues } from "../../types/note";
import { persist } from "zustand/middleware";

type NoteDraftStore = {
  draft: NoteFormValues;
  setDraft: (note: NoteFormValues) => void;
  clearDraft: () => void;
};

const initialDraft: NoteFormValues = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",

      partialize: (state) => ({ draft: state.draft }),
    }
  )
);

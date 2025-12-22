import css from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ sidebar, children }: Props) => {
  return (
    <>
      <section className={css.container}>
        <aside>
          <div className={css.sidebar}>{sidebar}</div>
        </aside>
        <div className={css.notesWrapper}>{children}</div>
      </section>
    </>
  );
};

export default NotesLayout;

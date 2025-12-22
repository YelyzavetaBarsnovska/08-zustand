import css from "./SidebarNotes.module.css";
import Link from "next/link";

const NotesSidebar = () => {
  return (
    <div>
      <ul className={css.menuList}>
        {/* список тегів */}
        <li className={css.menuItem}>
          <Link href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Todo`} className={css.menuLink}>
            Todo
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Work`} className={css.menuLink}>
            Work
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Personal`} className={css.menuLink}>
            Personal
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Meeting`} className={css.menuLink}>
            Meeting
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Shopping`} className={css.menuLink}>
            Shopping
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NotesSidebar;

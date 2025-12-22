import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onChange: (value: string) => void;
}
function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBox;

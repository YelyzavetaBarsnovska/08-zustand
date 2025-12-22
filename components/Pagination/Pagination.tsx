import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const forcePageIndex = Math.max(0, currentPage - 1);
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      forcePage={forcePageIndex}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="←"
      nextLabel="→"
    />
  );
}

export default function Pagination({ goToNextPage, goToPreviousPage, handlePageChange, currentpage, noOfPages }) {
  return (
    <div className="pagination-container">
      <button
        disabled={currentpage === 0}
        className="page-number"
        onClick={() => goToPreviousPage()}
      >
        🎉
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          className={"page-number" + (n === currentpage ? " active" : "")}
          key={n}
          onClick={() => handlePageChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentpage === noOfPages - 1}
        className="page-number"
        onClick={() => goToNextPage()}
      >
        🔎
      </button>
    </div>
  );
};

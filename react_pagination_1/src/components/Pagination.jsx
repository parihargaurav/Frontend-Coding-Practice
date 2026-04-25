/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export default function Pagination({ pageNo, setPageNo }) {
  const prevThreeNoArr = Array.from(
    { length: 3 },
    (_, index) => pageNo - 1 - index,
  )
    .filter((value) => value > 0)
    .reverse(); // 5-1-0, 5-1-1, 5-1-2

  // console.log(prevThreeNoArr);

  const nextFourNoArr = Array.from({ length: 4 }, (_, index) => pageNo + index);
  const paginationArr = [...prevThreeNoArr, ...nextFourNoArr];

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <>
      <div className="pagination-container">
        {pageNo > 1 ? (
          <div onClick={handlePrev} className="page-btn">
            {"<"}
          </div>
        ) : (
          ""
        )}

        {paginationArr.map((value) => {
        return (
          <div
            onClick={() => setPageNo(value)}
            className={value == pageNo ? `page-btn active` : `page-btn`}
          >
            {value}
          </div>
        );
      })}

        <div onClick={handleNext} className="page-btn">
          {">"}
        </div>
      </div>
    </>
  );
}

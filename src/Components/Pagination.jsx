import React from "react";
import Button from "./Button";

function Pagination({
  HandlePrevPage,
  HandleNextPage,
  currentPage,
  totalPages,
}) {
  return (
    <div className="flex justify-center items-center gap-4 pb-4">
      {/* <div>
            <label>Enter rows to display: </label>
            <input type="number" className="border border-black outline-none" />
          </div> */}

      {currentPage > 1 && <Button label={" < "} onClick={HandlePrevPage} />}
      {totalPages > 0 && (
        <p className="text-[16px]">
          {currentPage} of {totalPages}
        </p>
      )}
      {!(currentPage === totalPages && totalPages > 0) && (
        <Button label={" > "} onClick={HandleNextPage} />
      )}
    </div>
  );
}

export default Pagination;

import React from "react";

function DropDownMenu({ condition, setCondition }) {
  return (
    <div className="flex justify-between p-2 max-w-[200px]">
      <select
        className="border border-black py-2 px-1 cursor-pointer"
        onChange={(e) => setCondition(e.target.value)}
      >
        <option className="hover:bg-slate-400" value="ascending">
          Lowest ID First
        </option>
        <option className="hover:bg-slate-400" value="descending">
          Highest ID First
        </option>
        <option className="hover:bg-slate-400" value="alphabetical">
          Alphabetical Order (A-Z)
        </option>
        <option className="hover:bg-slate-400" value="reverseAlphabetical">
          Alphabetical Order (Z-A)
        </option>
      </select>
    </div>
  );
}

export default DropDownMenu;

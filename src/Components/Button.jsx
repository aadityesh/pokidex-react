import React from "react";

const Button = ({ onClick, label, srcImg }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md shadow-md flex border border-black px-4 py-[2px] gap-x-1 text-blue-700 bg-yellow-400 text-lg font-medium justify-center items-center"
    >
      {srcImg && <img src={`${srcImg}`} />} {label}
    </button>
  );
};

export default Button;

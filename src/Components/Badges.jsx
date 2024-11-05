import React from "react";

const Badges = ({ title, color }) => {
  const colorCodes = {
    green: "rgb(18, 209, 94)",
    red: "#ea4518",
    yellow: "#f5d926",
    brown: "#e2ad50",
    pink: "#e456ae",
    blue: "#07a3c2",
    grey: "#b4b4ad",
    black: "#5e5e55",
    white: "#c6b9d6",
    purple: "#893aea",
  };

  return (
    <div
      style={{ backgroundColor: `${colorCodes[color]}` }}
      className={
        "rounded-md shadow-md text-[12px] flex border border-black px-2 py-1 gap-x-1 brightness-[100%]"
      }
    >
      <img src={`/assets/icons/${title}.svg`} alt="" />
      {title ? title : "title"}
    </div>
  );
};

export default Badges;

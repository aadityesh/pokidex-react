import React from "react";

const Skeleton = () => {
  return (
    <>
      <div
        className={
          "max-h-[300px] max-w-[250px] rounded-md p-2 flex flex-col gap-2 border brightness-[110%]"
        }
      >
        ...
      </div>
    </>
  );
};

export default Skeleton;

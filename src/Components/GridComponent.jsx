import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import Card from "./Card";

function GridComponent({ postsToShow, colorMap }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-y-10 gap-x-4 pt-8 xl:grid-cols-4 xl:grid-rows-4">
      {postsToShow.map((post) => (
        <Card key={post.forms.url} colorMap={colorMap} pokemon={post} />
      ))}
    </div>
  );
}

export default GridComponent;

import React from "react";

export default function Rating([stars]) {
  return (
    <div className="start">
      <h1>{stars}</h1>
      {[...Array(5)].map((stars) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
}

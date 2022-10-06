import React from "react";

export default function Sagar({ author, title, rating }) {
  return (
    <div className="faq-container">
      <div>
        <span className="blue"> {author} </span>
        <span className="blue"> {title} </span>
        <span className="light-shade-color"> {rating}</span>
      </div>
    </div>
  );
}

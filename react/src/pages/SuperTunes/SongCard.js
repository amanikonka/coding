import React, { useState } from "react";
import Rating from "./Rating";

export default function SongCard() {
  const [data, newData] = useState([
    {
      author: "cookie kawaii",
      title: "vibe",
      rating: 4,
    },
    {
      author: "powfu",
      title: "death bed",
      rating: 3,
    },
    {
      author: "ashe",
      title: "moral of the story",
      rating: 5,
    },
    ,
    {
      author: "Breland",
      title: "my truck",
      rating: 2,
    },
    {
      author: "mahen",
      title: "pura pura Lupa",
      rating: 3,
    },
    {
      author: "jack harlow",
      title: "whats poppin",
      rating: 5,
    },
    {
      author: "smooveL",
      title: "apollo",
      rating: 4,
    },
    {
      author: "rennan Da penha",
      title: "carnaval chegando ",
      rating: 5,
    },
    {
      author: "zico",
      title: "anysong",
      rating: 4,
    },
  ]);
  // functions
  const TitleSort = () => {
    let copy = data.concat([]);
    copy = copy.sort((a, b) => (a.title > b.title ? 1 : -1));
    newData(copy);
  };
  const RatingSort = () => {
    let copy = data.concat([]);
    copy = copy.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    newData(copy);
  };
  return (
    <div>
      <button onClick={TitleSort}> sort byTitle</button>
      <button onClick={RatingSort}> sort by Rating</button>

      {data.map((x) => (
        <Rating author={x.author} title={x.title} rating={x.rating} stars="5" />
      ))}
    </div>
  );
}

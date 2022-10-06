import React, { useState } from "react";
import Sagar from "../../Sagar";
import Rating from "./Rating";
import Songs from "./Songs";
export default function Buttons() {
  const [songs, newSongs] = useState([
    {
      author: "Homeer Simpson",
      title: "e",
      rating: 5,
    },
    {
      author: "Homeer Simpson1",
      title: "d",
      rating: 6,
    },
    {
      author: "Homeer Simpson2",
      title: "b",
      rating: 1,
    },
    ,
    {
      author: "Homeer Simpson1",
      title: "ava",
      rating: 8,
    },
  ]);
  // functions
  const TitleSort = () => {
    let copy = songs.concat([]);
    copy = copy.sort((a, b) => (a.title > b.title ? 1 : -1));
    newSongs(copy);
  };
  const RatingSort = () => {
    let copy = songs.concat([]);
    copy = copy.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    newSongs(copy);
  };

  return (
    <div>
      <button onClick={TitleSort}> sort byTitle</button>
      <button onClick={RatingSort}> sort by Rating</button>

      {songs.map((x) => (
        <Sagar author={x.author} title={x.title} rating={x.rating} />
      ))}
    </div>
  );
}

import "./App.css";
import Login from "./pages/Login/Login.js";
import Faq from "./pages/FAQ/Faq.js";
import About from "./pages/About/About.js";
import Recipe from "./pages/Recipe/Recipe.js";
import Header from "./Header";
import Users from "./pages/User/Users";

import { Link, Route, Routes } from "react-router-dom";
import Table from "./pages/Table/Table";
import Zoom from "./pages/Zoom/Zoom";
import CatFact from "./pages/CatFact/CatFact";
import Songs from "./pages/Songs/Songs";
import Rating from "./pages/Songs/Rating";
import SongCard from "./pages/SuperTunes/SongCard";
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/table" element={<Table />} />
        <Route path="/zoom" element={<Zoom />} />
        <Route path="/cat-facts" element={<CatFact />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Songs" element={<Songs />} />
      </Routes>
    </div>
  );
}

export default App;

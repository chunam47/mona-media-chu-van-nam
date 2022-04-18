import { useState } from "react";
import "./css/style.css";
import "./App.css";
import "flowbite";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Search from "./pages/search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;

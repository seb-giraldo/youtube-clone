import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Router,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Video from "./pages/Video/Video.jsx";
import Search from "./pages/Search/Search.jsx";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} category={category} setCategory={setCategory} />} />
        <Route path="/results" element={<Search sidebar={sidebar} category={category} setCategory={setCategory} />} />
        <Route
          path="/video/:categoryId/:videoId"
          element={<Video sidebar={sidebar} category={category} setCategory={setCategory} />}
        />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Router,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/home/home.jsx";
import Video from "./pages/video/video.jsx";
import Search from "./pages/search/search.jsx";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sidebar={sidebar}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Search
              sidebar={sidebar}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route
          path="/video/:categoryId/:videoId"
          element={
            <Video
              sidebar={sidebar}
              category={category}
              setCategory={setCategory}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

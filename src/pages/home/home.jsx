import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Feed from "../../components/feed/feed.jsx";

function Home({ sidebar, category, setCategory }) {
  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`container container-animation ${sidebar ? "" : "large-container"}`}
      >
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Home;

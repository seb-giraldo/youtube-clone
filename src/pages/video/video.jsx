import React from "react";
import "./video.css";
import PlayVideo from "../../components/playvideo/playvideo.jsx";
import Recommended from "../../components/recommended/recommended.jsx";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.jsx";

function Video({ sidebar, category, setCategory }) {
  const { videoId, categoryId } = useParams();

  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`play-container container container-animation ${sidebar ? "small-container" : ""}`}
      >
        <PlayVideo videoId={videoId} />
        <Recommended videoId={videoId} categoryId={categoryId} />
      </div>
    </div>
  );
}

export default Video;

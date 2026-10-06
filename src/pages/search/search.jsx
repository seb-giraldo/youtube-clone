import React, { useState, useEffect } from "react";
import { API_KEY } from "../../data";
import { useSearchParams, Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import moment from "moment";

function Search({ sidebar, category, setCategory }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchList, setSearchList] = useState(null);

  async function fetchSearchList() {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`;
    try {
      await fetch(videoList_url)
        .then((response) => response.json())
        .then((data) => setSearchList(data.items));
    } catch {
      setSearchList([]);
    }
  }

  useEffect(() => {
    fetchSearchList();
  }, [searchQuery]);

  // console.log(searchQuery);
  // console.log(searchList && videoData);

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
        <div className="feed">
          {searchList &&
            searchList
              .filter((item) => item.id.kind === "youtube#video")
              .map((item) => {
                return (
                  <Link
                    to={`/video/${item.snippet.categoryId}/${item.id.videoId}`}
                    className="card"
                    key={item.id.videoId}
                  >
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <pre>{moment(item.snippet.publishedAt).fromNow()}</pre>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet aliquid necessitatibus aut. Maxime labore
                      aliquam{" "}
                    </p>
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Search;

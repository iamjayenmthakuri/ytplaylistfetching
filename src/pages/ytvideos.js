import React, { useEffect, useState } from "react";

const API = "AIzaSyAK_TLC36vrVcN1d2pQfdbVH1QpTIG1srY";
const ChannelId = "UCMiJRAwDNSNzuYeN2uWa0pA";

var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=10`;
const ytvideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJSON) => {
        const result = resJSON?.items?.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setVideos(result);
      });
  }, []);
  console.log(videos);
  return (
    <div>
      {(videos || [])?.map((item) => {
        return (
          <div key={item.etag}>
            <p>{item.snippet.title}</p>
            <div className="grid grid-cols-5 gap-4 col-span-1">
              <iframe
                width="360"
                height="200"
                src={item.Videolink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              {/* <p>{item.snippet.thumbnails.default}</p> */}
            </div>
            <p>description{item.snippet.discription}</p>
            <p className="gap-4">publishedAt:{item.snippet.publishedAt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ytvideos;

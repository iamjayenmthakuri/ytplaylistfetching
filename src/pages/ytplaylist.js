import React, { useEffect, useState } from "react";
import Image from "next/image";

const API = "AIzaSyAK_TLC36vrVcN1d2pQfdbVH1QpTIG1srY";
const ChannelId = "UCMiJRAwDNSNzuYeN2uWa0pA";

var fetchurl = `https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=20`;
const ytplaylist = () => {
  const [videos, setVideos] = useState([]);
  const loaderProp = (src) => {
    return src;
  };

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJSON) => {
        const result = resJSON?.items?.map((doc) => ({
          ...doc,
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
            <div className="grid grid-cols-5 gap-4 col-span-1">
              <div>
                {" "}
                <Image
                  src={`${item.snippet.thumbnails.high.url}`}
                  alt="jksdh"
                  width={100}
                  height={100}
                  loader={loaderProp}
                  unoptimized
                />
              </div>
            </div>
            <p>{item.snippet.title}</p>
            <p className="gap-4">publishedAt:{item.snippet.publishedAt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ytplaylist;

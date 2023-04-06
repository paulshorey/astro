import { useState, useEffect } from "react";

import { CollectionEntry } from "astro:content";

type VideoData = CollectionEntry<"videos">;

import VideoGrid from "./VideoGrid";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    fetch(`/search.json?q=${encodeURIComponent(search)}`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, [search]);

  return (
    <div class="flex flex-col">
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-2"
        type="text"
        placeholder="Search"
        value={search}
        onInput={(e) => setSearch(e.currentTarget.value)}
      />
      <VideoGrid videos={videos} />
    </div>
  );
}

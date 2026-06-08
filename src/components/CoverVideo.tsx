import { navbarTheme } from "../stores/nano";
import { useEffect, useState } from "preact/hooks";

type Video = {
  url: string;
  color: "dark" | "light";
};

export default function CoverVideo({ videos }: { videos: Video[] }) {
  const selected = videos[Math.floor(Math.random() * videos.length)];

  useEffect(() => {
    navbarTheme.set(selected.color);
  }, [selected.url]);

  return (
    <div className={"video-wrapper"}>
      <video key={selected.url} autoPlay muted loop playsInline>
        <source src={selected.url} type="video/mp4" />
      </video>
    </div>
  );
}

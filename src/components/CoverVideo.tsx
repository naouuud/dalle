import { navbarTheme } from "../stores/theme";
import { useEffect, useState } from "preact/hooks";

export default function CoverVideo({
  videos,
}: {
  videos: { url: string; color: "dark" | "light" }[];
}) {
  const [selected] = useState(
    () => videos[Math.floor(Math.random() * videos.length)],
  );

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

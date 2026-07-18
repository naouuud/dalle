import { navbarTheme } from "../stores/nano";
import { useEffect } from "preact/hooks";

type Video = {
  url: string;
  color: "dark" | "light";
};

export default function CoverVideo({ videos = [] }: { videos?: Video[] }) {
  const selected =
    videos.length > 0
      ? videos[Math.floor(Math.random() * videos.length)]
      : null;

  useEffect(() => {
    navbarTheme.set(selected?.color ?? "light");
  }, [selected?.url]);

  if (!selected) {
    return <div className="video-wrapper h-full w-full bg-neutral-100" />;
  }

  return (
    <div className="video-wrapper h-full w-full">
      <video key={selected.url} autoPlay muted loop playsInline>
        <source src={selected.url} type="video/mp4" />
      </video>
    </div>
  );
}

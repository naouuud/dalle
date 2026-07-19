import { useEffect } from "preact/hooks";
import { navbarTheme } from "../stores/nano";
import { useStore as useNanoStore } from "@nanostores/preact";

export default function Navbar() {
  const theme = useNanoStore(navbarTheme);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const path = window.location.pathname;
    const workPrefix = `${import.meta.env.BASE_URL}work`;
    const normalize = (value: string) => value.replace(/\/$/, "") || "/";
    const isHome = normalize(path) === normalize(import.meta.env.BASE_URL);

    navbar.classList.toggle("bg-neutral-100", path.startsWith(workPrefix));

    if (!isHome) return;

    let lastScrollY = window.scrollY;
    const threshold = 48;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        navbar.classList.remove("-translate-y-full");
      } else if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        navbar.classList.add("-translate-y-full");
      } else if (currentScrollY < lastScrollY) {
        navbar.classList.remove("-translate-y-full");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={`fixed z-40 top-0 left-0 w-full flex items-center pt-2 pb-3 pl-2 pr-2 transition-transform duration-300 ease-out lg:pr-6 mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <h1 className="flex-1 lg:text-xl lg:tracking-wide">
        <a href={import.meta.env.BASE_URL}>Rumi Dalle</a>
      </h1>
    </div>
  );
}

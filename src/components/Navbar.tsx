import { useEffect } from "preact/hooks";
import { navbarTheme } from "../stores/nano";
import { useStore as useNanoStore } from "@nanostores/preact";

export default function Navbar() {
  const theme = useNanoStore(navbarTheme);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const path = window.location.pathname;
    const workPrefix = `${import.meta.env.BASE_URL}work`;

    navbar?.classList.toggle("bg-neutral-100", path.startsWith(workPrefix));
  }, []);

  return (
    <div
      id="navbar"
      className={`fixed z-40 top-0 left-0 w-full flex items-center pt-2 pb-3 pl-2 pr-2 lg:pr-6 mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <h1 className="flex-1 lg:text-xl lg:tracking-wide">
        <a href={import.meta.env.BASE_URL}>Rumi Dalle</a>
      </h1>
    </div>
  );
}

import { useEffect } from "preact/hooks";
import { navbarTheme } from "../stores/nano";
import { useStore as useNanoStore } from "@nanostores/preact";

export default function Navbar() {
  const theme = useNanoStore(navbarTheme);

  const openMenu = () => {
    window.dispatchEvent(new CustomEvent("toggle-menu"));
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/work")) {
      document.getElementById("navbar")?.classList.add("bg-neutral-100");
    }
  });

  return (
    <div
      id="navbar"
      className={`fixed z-50 top-0 left-0 w-full flex items-center pt-4 pb-3 pl-4 pr-6 mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <h1 className="flex-1 text-2xl lg:text-7xl">
        <a href="/">Rumi Dalle</a>
      </h1>
      <button
        id="menu-open"
        type="button"
        className={`uppercase text-sm transition-colors ${
          theme === "dark"
            ? "text-white/70 hover:text-white"
            : "text-neutral-500 hover:text-black"
        }`}
        aria-label="Open info panel"
        aria-expanded="false"
        onClick={openMenu}
      >
        Info
      </button>
    </div>
  );
}

// function useStore(navbarTheme: any) {
//   throw new Error("Function not implemented.");
// }

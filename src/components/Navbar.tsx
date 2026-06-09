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
      className={`fixed top-0 left-0 w-full flex items-center pt-4 pb-3 pl-4 pr-6 mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <h1 className="flex-1 text-2xl lg:text-7xl">
        <a href="/">Rumi Dalle</a>
      </h1>
      <button
        id="burger"
        type="button"
        className="hamburger"
        aria-label="menu"
        aria-expanded="false"
        onClick={openMenu}
      >
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

// function useStore(navbarTheme: any) {
//   throw new Error("Function not implemented.");
// }

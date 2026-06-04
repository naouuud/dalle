import { navbarTheme } from "../stores/theme";
import { useStore as useNanoStore } from "@nanostores/preact";

export default function Navbar() {
  const theme = useNanoStore(navbarTheme);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex items-center pt-4 px-4 mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <h1 className="flex-1 text-2xl lg:text-7xl">
        <a href="">Rumi Dalle</a>
      </h1>
      <button
        id="burger"
        type="button"
        className="hamburger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  );
  {
    /*   
  <script>
    const burger = document.getElementById("burger");
    burger?.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("toggle-menu"));
    });
  </script> */
  }
}
function useStore(navbarTheme: any) {
  throw new Error("Function not implemented.");
}

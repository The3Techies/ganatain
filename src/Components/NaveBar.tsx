import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function NaveBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  let navigate = useNavigate();

  const btns = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Us",
      route: "/AboutUs",
    },
    {
      name: "Contact Us",
      route: "/ContactUs",
    }
  ];

  const HtmlBtns: Array<JSX.Element> = btns.map(({ name, route }, i) => {
    return (
      <button key={i}
        className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => {
          navigate(route)
          setIsMenuOpen(false)
        }}>
        {name}
      </button>
    );
  });


  return (
    <nav className="p-2 lg:p-0 sticky top-0 z-[100] bg-transparent"  >
      <div className="flex lg:flex-row-reverse flex-wrap items-center justify-evenly">
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>



        <div
          className={`${isMenuOpen ? "absolute" : "hidden"
            } w-full lg:block lg:w-auto right-0 top-12 z-50 bg-[#c8ffff] lg:bg-transparent`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col py-2 lg:py-0 lg:flex-row font-medium mt-4 lg:mr-6 lg:mt-0 gap-6 ">
            {HtmlBtns}
          </ul>
        </div>

        <div className="lg:block cursor-pointer" onClick={() => navigate("/")}>
          <img
            src='/ImgsCompomets/NavBaricon.webp'
            className="h-[10vh]"
            alt="Logo"
          />
        </div>

      </div>
    </nav>
  );
}
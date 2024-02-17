import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function NaveBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBarStyly, setNavBarStyly] = useState("bg-[#009BB0]");

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
      name: "Branches",
      route: "/Branches",
    },
    {
      name: "About Us",
      route: "/AboutUs",
    },
    {
      name: "Achievement",
      route: "/Achievement",
    },
  ];

  const HtmlBtns: Array<JSX.Element> = btns.map(({ name, route }, i) => {
    return (
      <button key={i}
        className=" font-bold"
        onClick={() => {
          navigate(route)
          setIsMenuOpen(false)
        }}>
        {name}
      </button>
    );
  });



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop === 0;

      if (isAtTop)
        setNavBarStyly("bg-[#009BB0]")
      else
        setNavBarStyly("bg-transparent")

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={"backdrop-filter backdrop-blur-xl pt-2  sticky top-0 z-[100] flex justify-center " + navBarStyly}  >
      <div className="flex flex-row-reverse flex-wrap items-center justify-between border-b-2 w-[90vw] pb-2 border-[#000] ">
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden border-2 "
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


        <div className="hidden md:block font-bold rounded-3xl py-2 px-4 cursor-pointer bg-[#009BB0] text-[#000000]" onClick={() => {
          navigate("/ContactUs")
          setIsMenuOpen(false)
        }}>Contact us</div>


        <div
          className={`${isMenuOpen ? "absolute" : "hidden"
            } w-full lg:block lg:w-auto right-0 top-12 z-50 bg-[#c8ffff] lg:bg-transparent`}
          id="navbar-solid-bg"
        >
          <div className="flex flex-col py-2 lg:py-0 lg:flex-row font-medium mt-4 lg:mr-6 lg:mt-0 gap-6 ">
            {HtmlBtns}
          </div>
        </div>

        <div className="lg:block cursor-pointer" onClick={() => navigate("/")}>
          <img
            src='/ImgsCompomets/NavBaricon.webp'
            className="h-[8vh]"
            alt="Logo"
          />
        </div>

      </div>
    </nav>
  );
}
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (link: string) => {
    navigate(link);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`bg-[#12071f]/95 font-body sticky top-0  z-2 flex items-center justify-between px-10 py-5 font-f1 border-b-1 border-white/25 text-white`}
      >
        {/* The Thoughts of A Person */}
        <Link to="/" aria-label="Home" className="flex gap-x-2 items-center">
          <span className="font-nav font-normal text-xl md:text-2xl">
            The Thoughts Of A Person
          </span>
        </Link>

        {/* LG screen links */}
        <div className="hidden items-center gap-x-8 font-medium lg:flex">
          {/* Youtube */}
          <a
            href="https://www.youtube.com/@RoshithPrakash"
            rel="noreferrer"
            target="_blank"
            className=" flex gap-x-1 items-center hover:text-darkmodeCTA transition-all"
          >
            <FaYoutube className="text-2xl" /> Youtube
          </a>

          {/* Instagram */}
          <a
            target="_blank"
            href="https://www.instagram.com/thethoughtsofaperson"
            rel="noreferrer"
            className="flex gap-x-1 items-center hover:text-darkmodeCTA transition-all"
          >
            <FaInstagram className="text-2xl" /> Instagram
          </a>

          {/* Linktree */}
          <a
            target="_blank"
            href="https://linktr.ee/thethoughtsofaperson"
            rel="noreferrer"
            className="flex gap-x-1 items-center hover:text-darkmodeCTA transition-all"
          >
            <PiLinktreeLogoBold className="text-2xl" /> LinkTree
          </a>
        </div>

        {/* Open Drawer */}
        <div className="flex items-center gap-x-10 font-medium lg:hidden">
          {/* Hamburger Button to open the drawer */}
          <button onClick={() => setOpen(true)} className="cursor-pointer">
            <RxHamburgerMenu className="text-xl" aria-label="Open menu" />
          </button>
        </div>

        {/* Drawer Menu */}
        <div
          className={`bg-[#1D0D30] scroller fixed top-0 right-0 z-50 h-screen w-full overflow-y-auto pb-6 text-center text-xl shadow-md md:text-lg ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500`}
          role="dialog"
          aria-modal="true"
          aria-label="Drawer Menu"
        >
          <div className=" flex items-center justify-between px-10 py-5 mt-0.5 lg:px-10">
            <button
              className="cursor-pointer flex gap-x-2 items-center"
              onClick={() => handleSearch("/")}
              aria-label="Home"
            >
              <span className="font-nav font-normal text-xl md:text-2xl">
                The Thoughts Of A Person
              </span>
            </button>
            <RxCross2
              onClick={() => setOpen(false)}
              className="hover:text-cta dark:hover:text-darkmodeCTA cursor-pointer text-2xl transition-all"
              aria-label="Close menu"
            />
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-y-12 px-8 text-xl font-medium">
            {/*  Add your links here */}
            {/* <button
              onClick={() => handleSearch("/")}
              className="hover:text-cta w-fit cursor-pointer transition-all"
              tabIndex={0}
              aria-label="Go to Home"
            >
              Home
            </button> */}

            {/* Youtube */}
            <a
              href="https://www.youtube.com/@RoshithPrakash"
              rel="noreferrer"
              target="_blank"
              className=" flex gap-x-2 items-center hover:text-darkmodeCTA transition-all"
            >
              <FaYoutube className="text-2xl" /> Youtube
            </a>

            {/* Instagram */}
            <a
              target="_blank"
              href="https://www.instagram.com/thethoughtsofaperson"
              rel="noreferrer"
              className="flex gap-x-2 items-center hover:text-darkmodeCTA transition-all"
            >
              <FaInstagram className="text-2xl translate-0.5" /> Instagram
            </a>

            {/* Linktree */}
            <a
              target="_blank"
              href="https://linktr.ee/thethoughtsofaperson"
              rel="noreferrer"
              className="flex gap-x-2 items-center hover:text-darkmodeCTA transition-all"
            >
              <PiLinktreeLogoBold className="text-2xl" /> LinkTree
            </a>
          </div>

          {/* Footer Text   */}
          <div className="absolute bottom-24 left-1/2 w-full -translate-x-1/2 pl-1 text-sm lg:bottom-10"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="sticky top-0 py-5 px-5 md:px-10 bg-[#04122d] bg-opacity-95 text-white w-full border-b-white flex justify-between items-center">
      <span className="text-md md:text-2xl font-medium">
        The Thoughts of A Person
      </span>
      <div className="flex gap-x-5 items-center">
        <a
          href="https://www.instagram.com/thethoughtsofaperson/"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-white hover:text-[#C13584] transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.amazon.in/dp/B09ZXYMXSV?ref_=cm_sw_r_apann_ts_YSP19DKG62Z458KJK90H"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-white hover:text-[#FF9900] transition-all"
        >
          <FaAmazon />
        </a>
        <a
          href="https://www.goodreads.com/book/show/61077959-midnight-writings"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-white hover:text-[#e9e5cd] transition-all"
        >
          <FaGoodreads />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

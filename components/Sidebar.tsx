import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import Footer from "./Footer";
import SuggestedAccounts from "./SuggestedAccounts";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const normalLink = ("flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-secondary rounded");
  return (
    <div>
      <div
        className=" block xl:hidden m-2 ml-4 mt-3 text-xl
       cursor-pointer"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle className=" dark:text-secondary" /> : <AiOutlineMenu className=" dark:text-secondary" />}
      </div>
      {showSidebar && (
        <div
          className=" xl:w-400 w-20 flex flex-col justify-
        items-start border-r-2 border-gray-100 dark:border-[#1a1a1a] xl:border-0 p-3"
        >
          <div>
            <div className=" xl:border-b-2 border-gray-200 xl:pb-4">
              <Link href="/">
                <div className={normalLink}>
                  <p className=" text-2xl">
                    <AiFillHome />
                  </p>
                  <span className=" text-xl hidden xl:block">For you</span>
                </div>
              </Link>
            </div>
          </div>
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;

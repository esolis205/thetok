import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineLogout } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { WiMoonWaningCrescent3, WiDaySunny } from "react-icons/wi";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

import Logo from "../utils/tiktik-logo.png";
import { error } from "console";

const Navbar = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div
      className=" w-full flex justify-between items-center 
    border-b-2 border-gray-200 py-2 px-4"
    >
      <Link href="/">
        <div className=" w-[100px] md:w-[130px]">
          <Image
            className=" cursor-pointer"
            src={Logo}
            // makes image responsive
            layout="responsive"
            alt=""
          />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>{userProfile ? (
          <div className=" flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className=" dark:border-[#F51997] hover:border-blue-300 border-2 px-2 md:px-4 text-md 
              font-semibold flex items-center gap-2 dark:hover:border-blue-300">
                <IoMdAdd className=" text-xl dark:text-blue-500" /> {` `}
                <span className=" hidden md:block dark:text-white">Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href="/">
              <>
                <Image
                  width={40}
                  height={40}
                  className=" rounded-full cursor-pointer"
                  src={userProfile.image}
                  alt="Video by user"
                />
              </>
            </Link>
            )}
            <button 
            type="button"
            className=" px-2" 
            onClick={() => {
              googleLogout();
              removeUser();
            }}
            >
              <div className="logout">
                <MdOutlineLogout
                color="red"
                fontSize={22}/>
              </div>
            </button>
          </div>
      ) : (
        <GoogleLogin 
        onSuccess={(response) => createOrGetUser(response, addUser)} 
        onError={() => console.log('Error')} />
      )}
      </div>
      <div
        className=" cursor-pointer rounded-full border-2 border-solid border-[#F51997] p-[1px]"
        onClick={() => setUseDarkMode((prev) => !prev)}
      >
        <>
          {useDarkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")}
        </>
        <div className=" dark:text-white">
          {useDarkMode ? (
            <p className=" text-2xl">
              <WiDaySunny />
            </p>
          ) : (
            <p className=" text-2xl">
              <WiMoonWaningCrescent3 />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

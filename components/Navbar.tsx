import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/tiktik-logo.png';

const Navbar = () => {
  const [useDarkMode, setUseDarkMode] = useState(false)

  return (
    <div className=' w-full flex justify-between items-center 
    border-b-2 border-gray-200 py-2 px-4'>
        <Link href="/">
            <div className=' w-[100px] md:w-[130px]'>
                <Image
                className=" cursor-pointer"
                src={Logo}
                // makes image responsive
                layout='responsive'
                alt='' />
            </div>
        </Link>
          <div
          className=" cursor-pointer rounded border-2 border-solid border-[#F51997] p-[1px]"
          onClick={() => setUseDarkMode((prev) => !prev)}>
            {useDarkMode ? (document.documentElement.classList.add('dark'))
            : (document.documentElement.classList.remove('dark'))}
            <p className=' text-sm dark:text-white'>Dark Mode</p>
          </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { topics } from '../utils/constants';

const Discover = () => {
const activeTopicStyle = "";

const topicStyle = "";

  return (
    <div className=" dark:text-white xl:border-b-2 xl:border-gray-200 pb-6">
      <p className=" text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className=" flex gap-3 flex-wrap">
        {topics.map((item) => (
          <Link 
          href={`/?topic=${item.name}`} 
          key={item.name}>
            <div>
              <span className=" font-bold text-2xl xl:text-md dark:text-[#F51997]">
                {item.icon}
              </span>
              <span className=" font-medium text-md hidden xl:block capitalize dark:text-[#F51997]">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover
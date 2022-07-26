import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { topics } from "../utils/constants";

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle =
    "xl:border-2 hover:bg-primary dark:hover:bg-primary xl:border-blue-500 px-3 py-2 rounded xl:rounded-full flex items-center justify-center cursor-pointer text-blue-500 dark:text-blue-500 gap-2";

  const topicStyle =
    "xl:border-2 hover:bg-primary dark:hover:bg-[#404040] border-black dark:border-secondary px-3 py-2 rounded xl:rounded-full flex items-center justify-center cursor-pointer text-black dark:text-secondary gap-2";

  return (
    <div className=" dark:text-white xl:border-b-2 xl:border-gray-200 pb-6">
      <p className=" text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className=" flex gap-3 flex-wrap">
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div
              className={topic === item.name ? activeTopicStyle : topicStyle}
            >
              <span className=" font-bold text-2xl xl:text-md">
                {item.icon}
              </span>
              <span className=" font-medium text-md hidden xl:block capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;

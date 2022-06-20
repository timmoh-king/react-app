/**
 * @Author: Your name
 * @Date:   2022-06-19 16:31:14
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-19 17:52:53
 */
import React from "react";

const Subscribe = () => {
  return (
    <div className="homepage bg-bima-background  py-5">
      <div className="container d-flex py-3 px-5 space-y-5 items-center ml-[105px]">
        <p className="font-bold text-bima-title text-xl">Subscribe to get the latest news</p>
        <p className="font-regular text-bima-grey text-center mt-3 mb-3">
          This file will show information about a product designer's favorite
          tool. Without props, the code will look something like this show
          information about a product designer's favorite tool.
        </p>
        <div className="space-x-3">
        <input
          type="text"
          placeholder="Enter your email"
          className="rounded h-[29px] min-w-[600px]"
        ></input>
        <button className="bg-bima-skyblue min-w-[145px] h-[30px] rounded-md text-bima-white mt-2 justify-items-end">
          Search
        </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

/**
 * @Author: Your name
 * @Date:   2022-06-18 21:23:27
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-19 18:01:58
 */
import React from "react";
import Button from "./Button";

const Homepage = () => {
  return (
    <div classname="homepage">
      <div className="container inline-flex d-flex max-h-[580px]">
        <div className="mt-[200px]">
          <p className="font-semibold text-bima-title text-3xl text-start">
            Welcome to my{" "}
            <span className="text-bima-green">React application</span>
          </p>
          <p className="text-justify py-6">
            Now let's create another component named Tool.js. This file will
            show information about a product designer's favorite tool. Without
            props, the code will look something like this show information about
            a product designer's favorite tool. Without props, the code will
            look something like this
          </p>
          <Button text="Get started" />
        </div>
        <img
          src="https://i.pinimg.com/736x/cb/dc/9b/cbdc9bf758a327b81d8c8a937f95fcf4.jpg"
          alt="developer"
        />
      </div>
    </div>
  );
};

export default Homepage;

"use client";
import React from "react";
import Navbar from "./Navbar";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Instructions from "./Instructions";

function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-center font-bold text-4xl my-4">
        Academic Transcript Analyzer! 🚀
      </h1>
      <div className="text-gray-400 font-medium text-center">
        Transform images into text with image-to-text conversion application.
      </div>
      <div
        id="home"
        className="mx-auto flex-col mb-10 my-10 flex w-full max-w-screen-md flex-wrap py-2 px-2 sm:px-4 lg:max-w-screen-xl"
      >
        <main>
          <Instructions />
          <div className="justify-center flex items-center my-5">
            <a
              href="/upload"
              className={
                "w-40 text-center justify-center h-12 border bg-blue-500 rounded-md border-solid border-blue-500 pt-3 text-black"
              }
            >
              <CloudUploadOutlinedIcon className="-mt-1 mr-1" />
              Upload
            </a>

            <a
              className={
                "w-40 text-center mx-2 justify-center h-12 border  rounded-md border-solid border-green-600 pt-3 text-black"
              }
              href={"/search"}
              onClick={() => {}}
            >
              <PersonSearchIcon className="-mt-1 mr-1" />
              Search
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

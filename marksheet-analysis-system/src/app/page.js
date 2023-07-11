"use client";
import React from "react";
import Navbar from "./components/Navbar";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Instructions from "./components/Instructions";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;

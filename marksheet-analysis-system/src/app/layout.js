import React from "react";
import "./globals.css";
import Toast from "./components/Toast";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Marks sheet Analysis System",
  description: "Marks sheet Analysis System using AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
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
          {children}
        </div>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;

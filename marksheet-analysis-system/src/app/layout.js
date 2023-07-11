import React from "react";
import "./globals.css";
import Toast from "./components/Toast";

export const metadata = {
  title: "Marks sheet Analysis System",
  description: "Marks sheet Analysis System using AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toast />
    </html>
  );
};

export default RootLayout;

import React from "react";
import "./globals.css";

export const metadata = {
  title: "Marksheet Analysis System",
  description: "Marksheet Analysis System using AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

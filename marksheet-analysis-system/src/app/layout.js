import "./globals.css";

export const metadata = {
  title: "Marks sheet Analysis System",
  description: "Marks sheet Analysis System using AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div id="home" className="bg-gray-50">
      <Nav />
      {children}
    </div>
  );
}

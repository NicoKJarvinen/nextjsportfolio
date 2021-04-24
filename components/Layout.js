import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Nav />
      {children}
    </div>
  );
}

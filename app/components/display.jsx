import React from "react";
import DisplayHome from "./displayhome";

export default function Display() {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <DisplayHome />
    </div>
  );
}

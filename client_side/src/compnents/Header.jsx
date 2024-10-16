import React from "react";

export default function Header() {
  return (
    <div className="md:px-24 mt-4 px-4">
      <div className="bg-heder  md:py-60 md:px-96 py-24 px-10">
        
        <h1 className="md:text-5xl text-3xl font-black text-white text-center">
          Find your dream job
        </h1>
        <div className="flex items-center justify-center mt-12 bg-white rounded-lg px-2 py-2">
          <i className="ri-search-line text-slate-500 text-xl mr-2"></i>
          <input
            className="w-full h-full outline-0 px-2"
            type="text"
            name=""
            id=""
          />
          <div className="md:px-3 md:py-2 px-2 py-1 bg-blue-300 rounded-md text-sm text-white font-bold cursor-pointer">
            Search
          </div>
        </div>
      </div>
    </div>
  );
}

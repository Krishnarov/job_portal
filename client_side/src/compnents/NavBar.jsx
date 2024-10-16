import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-between items-center md:px-24 px-4 py-2 md:py-4 bg-slate-100 font-bold ">
        <div>
          <span className="px-2 py-1 text-green-500 mr-2 bg-green-300 font-black rounded-lg">X</span>Job Finder
        </div>
        <div className="">
          <div className="px-2 py-1 md:hidden block border rounded-lg"><i class="ri-menu-line"></i></div>
            <ul className="flex gap-6 items-center hidden">
                <li>For you</li>
                <li>Explore</li>
                <li>Salaries</li>
                <li>Insights</li>
                <li>Resources</li>
                <li className="px-4 py-2 bg-blue-300 rounded-md text-white font-bold cursor-pointer">Post a Job</li>
                <li className="px-4 py-2 bg-white rounded-md font-bold cursor-pointer">Log in</li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

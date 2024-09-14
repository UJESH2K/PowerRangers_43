"use client"
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
  
	return (
	  <div className="relative box-content" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
		<button
		  id="dropdownHoverButton"
		  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		  type="button"
		>Menu
		  <svg className="w-2 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
			<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
		  </svg>
		</button>
  
		{isOpen && (
		  <div
			id="dropdownHover"
			className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-[7rem] dark:bg-gray-700"
		  >
			<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
			  <li>
				<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
			  </li>
			  <li>
				<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
			  </li>
			  <li>
				<a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
			  </li>
			</ul>
		  </div>
		)}
	  </div>
	);
  };
  
  export default Dropdown;
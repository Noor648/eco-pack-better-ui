'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { categories, navLinks } from '../../data';
import { AiOutlineDown } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsDropdownOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsDropdownOpen(false), []);

  return (
    <nav className="flex items-center justify-between px-8 py-3 shadow-md">
      <div className="text-2xl font-bold text-secondary">
        ECO<span className="text-gray-800">PAK</span>
      </div>

      {/* Links */}
      <ul className="flex gap-12 items-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <li key={link.label} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                href={link.href}
                className="flex items-center text-[14px] py-2 border-b-2 border-white hover:border-black"
              >
                {link.label}
                <AiOutlineDown className="text-sm pl-1" />
              </Link>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute text-[13px] text-gray-700 bg-white border border-gray-300 rounded shadow-md z-10">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link href={category.href} className="block px-4 py-2 hover:underline whitespace-nowrap">
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li key={link.label} className="py-2 text-[14px] border-b-2 border-white hover:border-black">
              <Link href={link.href} className="">
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Search Button / Bar */}
      <div className="relative">
        {searchOpen ? (
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="ml-2 text-black hover:scale-105" onClick={() => setSearchOpen(false)}>
              <RxCross2 size={20} />
            </button>
          </div>
        ) : (
          <button className="text-black hover:scale-105" onClick={() => setSearchOpen(true)}>
            <CiSearch size={25} />
          </button>
        )}
      </div>
    </nav>
  );
}

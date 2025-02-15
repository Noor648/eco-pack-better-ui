'use client';
import { useState } from 'react';
import Link from 'next/link';
import { category, navLinks } from '../../data';
import { AiOutlineDown } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-8 py-3 shadow-md">
      <div className="text-2xl font-bold text-green-600">
        ECO<span className="text-gray-800">PAK</span>
      </div>

      {/* Links */}
      <ul className="flex gap-12 items-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center text-[14px] py-2 border-b-2 border-white hover:border-black"
                onClick={() => {
                  router.push(link.href);
                }}
              >
                {link.label}
                <AiOutlineDown className="text-sm pl-1" />
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute text-[13px] text-gray-700 bg-white border border-gray-300 rounded shadow-md z-10 ">
                  <ul>
                    {category.map((category) => (
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
            <li key={link.label} className="py-2 text-[14px] border-b-2 border-b-2 border-white hover:border-black">
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
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
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

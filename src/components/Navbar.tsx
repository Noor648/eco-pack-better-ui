'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categories, navLinks } from '../../data';
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="shadow-md bg-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-secondary">
          ECO<span className="text-gray-800">PAK</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative">
                <button
                  className="flex items-center text-[14px] py-2 border-b-2 border-white hover:border-black"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {link.label}
                  <AiOutlineDown className="text-sm pl-1" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute text-[13px] text-gray-700 bg-white border border-gray-300 rounded shadow-md z-10 mt-1">
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
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          )}
        </ul>

        {/* Search & Mobile Menu Button */}
        <div className="flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col gap-4 p-5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    className="flex items-center text-[14px] py-2 w-full justify-between"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {link.label}
                    <AiOutlineDown className="text-sm" />
                  </button>

                  {/* Dropdown Menu for Mobile */}
                  {isDropdownOpen && (
                    <ul className="mt-2 border border-gray-300 rounded bg-gray-50">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link
                            href={category.href}
                            className="block px-4 py-2 hover:underline whitespace-nowrap"
                            onClick={closeMobileMenu}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-[14px]"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

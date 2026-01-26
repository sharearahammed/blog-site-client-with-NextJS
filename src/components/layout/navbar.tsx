"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Link href="/login" className="px-4 py-1 border rounded-md">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-1 bg-black text-white rounded-md">
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden ml-auto text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-black z-50 transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-xl">✕</button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <hr />

          <ModeToggle />

          <Link href="/login" onClick={() => setOpen(false)}>
            Login
          </Link>

          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-md w-fit"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

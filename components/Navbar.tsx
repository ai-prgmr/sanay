"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Achievements", href: "/achievements" },
    { name: "Research", href: "/research" },
    { name: "Podcast", href: "/podcast" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md shadow-sm border-b border-outline/10 h-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
          <Link href="/" className="font-headline-md text-headline-md font-bold tracking-tight text-primary hover:opacity-80 transition-opacity">
            Sanay Choubey
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body-md text-body-md transition-colors pb-1 ${
                    isActive
                      ? "text-secondary font-bold border-b-2 border-secondary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="/Sanay_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-6 py-2 rounded transition-all active:scale-95 hover:bg-secondary font-label-md text-label-md cursor-pointer hover:shadow-md"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary focus:outline-none select-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu Content */}
      <div
        className={`fixed top-20 right-0 w-64 h-[calc(100vh-80px)] bg-surface-container-low/95 backdrop-blur-lg border-l border-outline/10 shadow-2xl z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body-md text-lg transition-colors py-2 border-b border-outline/5 ${
                  isActive
                    ? "text-secondary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href="/Sanay_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary text-center py-3 rounded transition-all active:scale-95 hover:bg-secondary font-label-md text-label-md mt-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

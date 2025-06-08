"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-black dark:bg-white"
                  : "bg-black dark:bg-white group-hover:scale-110"
              }`}
            >
              <svg
                className="w-5 h-5 text-white dark:text-black transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-black dark:text-white">
              Shortcut
            </span>
          </Link>



          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Olá, {user?.name}
                  </span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 font-medium transition-all duration-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    Sair
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  Entrar
                </Link>
                <Link
                  href="/register"
                  className={`px-6 py-2 font-medium rounded-lg transition-all duration-200 ${
                    isScrolled
                      ? "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                      : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl"
                  }`}
                >
                  Começar Grátis
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-4 border-t border-gray-200 dark:border-gray-800 mt-4">
            <div className="space-y-2">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="px-4 py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Olá, {user?.name}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Começar Grátis
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
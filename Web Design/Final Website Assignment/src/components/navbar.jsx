'use client'

import { useState, useRef, useEffect } from 'react'
import { Menu, X, User, LogOut, Settings, LogIn, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import axios from "axios"
import { cookieStore as Cookies } from "@/tools/cookieClient";

function CreateLink({ title, link = "#", isMobile = false }) {
  return (
    <Link
      href="#"
      onClick={() => window.location.href = link}
      className={`text-[#333] hover:bg-[#4CAF50] hover:text-[#ffffff] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isMobile ? 'block' : ''
      }`}
    >
      {title}
    </Link>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function FetchUser() {
      let userFound = sessionStorage.getItem("user_client");

      if (!userFound) {
        const {data} = await axios.get("/api/user");

        if (!data.success) return;
        sessionStorage.setItem("user_client", JSON.stringify(data.user));
        setUser(data.user);
      } else {
        setUser(JSON.parse(userFound));
      }

    }

    FetchUser();
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("user_client");
    Cookies.remove("userid");
    window.location.reload();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const navLinks = [
    { title: 'Home', link: '/' },
    { title: 'Shop', link: '/shop' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
  ]

  return (
    <nav className="bg-[#f4f4f4] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-2xl font-bold text-[#4CAF50]">ua store</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <CreateLink key={link.title} title={link.title} link={link.link} />
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" passHref>
              <Button variant="outline" className="flex items-center">
                <ShoppingCart className="mr-2 h-4 w-4" />
                <span>Order Cart</span>
              </Button>
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative p-2"
                  >
                    <User className="h-6 w-6 text-[#333] hover:text-[#4CAF50] transition-colors duration-200" />
                    <span className="sr-only">Open user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Your Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" passHref>
                <Button className="flex items-center">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Log in</span>
                </Button>
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <CreateLink key={link.title} title={link.title} link={link.link} isMobile={true} />
          ))}
          <Link href="/cart" passHref className="block w-full">
            <Button variant="outline" className="w-full justify-start mt-2">
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Order Cart</span>
            </Button>
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-[#4CAF50]">
          {user ? (
            <>
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full p-1 bg-[#ffffff] text-[#333]" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-[#333]">{user.username}</div>
                  <div className="text-sm font-medium leading-none text-[#333] opacity-75 mt-1">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  <span>Your Profile</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-3 px-2 space-y-1">
              <Link href="/login" passHref className="block w-full">
                <Button className="w-full justify-start">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Log in</span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
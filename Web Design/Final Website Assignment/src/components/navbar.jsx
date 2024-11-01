'use client'

import { useState, useRef, useEffect } from 'react'
import { Menu, X, User, LogOut, Settings } from 'lucide-react'

function CreateLink({title, link="#", isMobile=false}) {
    return (
        !isMobile ? (
            <a href={link} className="text-[#333] hover:bg-[#4CAF50] hover:text-[#ffffff] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{title}</a>
        ) : (
            <a href={link} className="text-[#333] hover:bg-[#4CAF50] hover:text-[#ffffff] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">{title}</a>
        )
    )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const navLinks = [
    { title: 'Home', link: '#' },
    { title: 'About', link: '#' },
    { title: 'Services', link: '#' },
    { title: 'Contact', link: '#' },
  ]

  return (
    <nav className="bg-[#f4f4f4] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#4CAF50]">Kalico</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <CreateLink key={link.title} title={link.title} link={link.link} />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative z-50" ref={dropdownRef}>
                <button
                  onClick={toggleProfile}
                  className="max-w-xs bg-[#ffffff] rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f4f4f4] focus:ring-[#4CAF50]"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <User className="h-8 w-8 rounded-full p-1 text-[#333] hover:text-[#4CAF50] transition-colors duration-200" />
                </button>
                {isProfileOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#ffffff] ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#333] hover:bg-[#4CAF50] hover:text-[#ffffff] transition-colors duration-200"
                      role="menuitem"
                    >
                      <User className="inline-block w-4 h-4 mr-2" />
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#333] hover:bg-[#4CAF50] hover:text-[#ffffff] transition-colors duration-200"
                      role="menuitem"
                    >
                      <Settings className="inline-block w-4 h-4 mr-2" />
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#333] hover:bg-[#4CAF50] hover:text-[#ffffff] transition-colors duration-200"
                      role="menuitem"
                    >
                      <LogOut className="inline-block w-4 h-4 mr-2" />
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#333] hover:text-[#ffffff] hover:bg-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4CAF50] transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <CreateLink key={link.title} title={link.title} link={link.link} isMobile={true} />
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-[#4CAF50]">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <User className="h-10 w-10 rounded-full p-1 bg-[#ffffff] text-[#333]" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-[#333]">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-[#333] opacity-75">tom@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#333] hover:text-[#ffffff] hover:bg-[#4CAF50] transition-colors duration-200">Your Profile</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#333] hover:text-[#ffffff] hover:bg-[#4CAF50] transition-colors duration-200">Settings</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#333] hover:text-[#ffffff] hover:bg-[#4CAF50] transition-colors duration-200">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
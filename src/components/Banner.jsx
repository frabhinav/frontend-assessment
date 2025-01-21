import { Menu, X, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

import Logo from "../assets/logo.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Banner() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <header className="bg-[#2B4162] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
          <a
            href="mailto:www.registerkaro.in"
            className="hover:text-orange-300 flex items-center gap-1 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          www.registerkaro.in
          <a href="tel:+918447746183" className="hover:text-orange-300 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +918447746183
          </a>
          <div className="hidden sm:flex space-x-3">
            {/* Social media icons */}
            <a href="/">
              <Instagram size={20} />
            </a>
            <a href="/">
              <Facebook size={20} />
            </a>
            <a href="/">
              <Twitter size={20} />
            </a>
            <a href="/">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white py-2 relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="RegisterKaro" width={180} height={35} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-500"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-orange-500 font-[600] px-2"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 font-[600] px-2 gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              >
                Our Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-md shadow-lg py-2 z-50">
                  <a
                    href="/services/business-registration"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Business Registration
                  </a>
                  <a
                    href="/services/tax-compliance"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Tax Compliance Services
                  </a>
                  <a
                    href="/services/legal-consulting"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Legal Consulting
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 font-[600] px-2"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 font-[600] px-2"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 font-[600] px-2"
            >
              About us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 font-[600] px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Talk An Expert
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden z-50">
              <div className="flex flex-col py-2">
                <a
                  href="/"
                  className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  Home
                </a>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    className="w-full px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 flex items-center justify-between"
                    onClick={() =>
                      setIsMobileServicesOpen(!isMobileServicesOpen)
                    }
                  >
                    Our Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="bg-gray-50">
                      <a
                        href="#"
                        className="block px-8 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        Business Registration
                      </a>
                      <a
                        href="#"
                        className="block px-8 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        Tax Compliance Services
                      </a>
                      <a
                        href="#"
                        className="block px-8 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        Legal Consulting
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  Search
                </a>
                <div className="px-4 py-2">
                  <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                    Talk An Expert
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

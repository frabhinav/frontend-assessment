import { Facebook, Instagram, Github, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1B44] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Description and Social Links */}
          <div className="md:col-span-1">
            <p className="text-sm mb- 6">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              START A BUSINESS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              COMPLIANCE & TAX
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Channels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Scale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Watch the Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Competition
                </a>
              </li>
            </ul>
          </div>

          {/* BIS & CDSCO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA726]">
              BIS & CDSCO
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#FFA726] rounded-full p-4 hover:bg-[#FF9800] transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

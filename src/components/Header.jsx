import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(""); // for mobile submenu toggle
  const location = useLocation();

  const menuItems = [
    { label: "Home", link: "/" },
    {
      label: "Markets",
      subLinks: ["/markets/stocks", "/markets/forex", "/markets/commodities", "/markets/crypto", "/markets/indices"],
    },
    {
      label: "Learn",
      subLinks: ["/learn/trading-basics", "/learn/market-news"],
    },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between border-b border-gray-300 md:border-0">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="TFXE Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-black font-medium">
          {menuItems.map((item) =>
            item.subLinks ? (
              <div key={item.label} className="relative group flex items-center gap-1">
                <span className="cursor-pointer hover:text-orange-500 flex items-center gap-1">
                  {item.label}
                  <Icon icon="heroicons:chevron-down" width={16} />
                </span>
                <div
                  className={`
                    absolute left-0 top-full mt-2 py-2 rounded z-50 min-w-[160px]
                    bg-white border border-orange-500 shadow-lg
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                  `}
                >
                  {item.subLinks.map((sub) => (
                    <Link
                      key={sub}
                      to={sub}
                      className={`block px-4 py-2 hover:text-orange-500 hover:bg-white/10 ${
                        isActive(sub) ? "text-orange-500" : "text-black"
                      }`}
                    >
                      {sub
                        .split("/")
                        .pop()
                        .replace("-", " ")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className={`hover:text-orange-500 ${isActive(item.link) ? "text-orange-500" : "text-black"}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-3">
          {["twitter", "facebook", "linkedin"].map((icon) => (
            <Icon
              key={icon}
              icon={`mdi:${icon}`}
              width={36}
              className="p-2 rounded bg-orange-500 text-white hover:p-1 transition-all duration-300"
            />
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-orange-500">
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pt-2 pb-4" : "max-h-0 opacity-0"
        } px-4 space-y-4`}
      >
        {menuItems.map((item) =>
          item.subLinks ? (
            <div key={item.label}>
              <div
                onClick={() => setOpenSubMenu(openSubMenu === item.label ? "" : item.label)}
                className="flex justify-between items-center text-black font-semibold cursor-pointer"
              >
                <span>{item.label}</span>
                <Icon
                  icon="heroicons:chevron-down"
                  width="20"
                  className={`transition-transform duration-300 ${openSubMenu === item.label ? "rotate-180" : ""}`}
                />
              </div>
              <div
                className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openSubMenu === item.label ? "max-h-96 opacity-100 visible mt-1" : "max-h-0 opacity-0 invisible"
                }`}
              >
                {item.subLinks.map((sub) => (
                  <Link
                    key={sub}
                    to={sub}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenSubMenu("");
                    }}
                    className={`block py-1 hover:text-orange-500 ${isActive(sub) ? "text-orange-500" : "text-black"}`}
                  >
                    {sub
                      .split("/")
                      .pop()
                      .replace("-", " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className={`block hover:text-orange-500 ${isActive(item.link) ? "text-orange-500" : "text-black"}`}
            >
              {item.label}
            </Link>
          )
        )}

        {/* Social Icons in Mobile */}
        <div className="flex space-x-3 mt-2">
          {["twitter", "facebook", "linkedin"].map((icon) => (
            <Icon
              key={icon}
              icon={`mdi:${icon}`}
              width={36}
              className="p-2 rounded bg-orange-500 text-white hover:p-1 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;

import { X } from "lucide-react";
import Button from "./Button";

function Sidebar({ open, setOpen }) {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close sidebar after navigation
    }
  };

  return (
    <div className="flex lg:hidden">
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/3 bg-blue-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <X
            size={24}
            className="cursor-pointer text-yellow-400"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
          <li
            onClick={() => handleScroll("home")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("about")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            About Us
          </li>
          <li
            onClick={() => handleScroll("services")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Services
          </li>
          <li
            onClick={() => handleScroll("contact")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Contact
          </li>
        </ul>

        {/* Button */}
        <div className="mt-8 px-6">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

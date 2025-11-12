// import { Menu, X } from "lucide-react";
// import Button from "./Button";
// import LiElement from "./LiElement";
import HeroButton from "./transButton";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function HeroSection() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <main id="home" className="hero p-0 m-0 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[url('aerial-view-container-cargo-ship-sea.jpg')] -z-10 bg-cover bg-center blur-[5px] brightness-75 opacity-70"></div>

//       {/* Navbar */}
//       <nav className="navbar sticky top-10 flex items-center px-5 h-12 mx-4 justify-between rounded-4xl">
//         {/* Mobile Menu Icon */}
//         <div className="md:hidden cursor-pointer">
//           <Menu style={{ color: "white" }} onClick={() => setOpen(true)} />
//         </div>

//         {/* Logo */}
//         <div className="hidden md:flex text-white font-medium text-[20px]">
//           C'est Bon LLC
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-4 text-white font-medium">
//           <LiElement>Home</LiElement>
//           <LiElement>About Us</LiElement>
//           <LiElement>Services</LiElement>
//         </ul>

//         {/* Desktop Button */}
//         <div className="hidden md:block">
//           <Button>Get Started</Button>
//         </div>
//       </nav>

//       {/* Sidebar Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-3/4 bg-blue-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-between items-center p-5 border-b border-white/20">
//           <span className="text-lg font-semibold">Menu</span>
//           <X
//             size={24}
//             className="cursor-pointer text-yellow-400"
//             onClick={() => setOpen(false)}
//           />
//         </div>

//         {/* Sidebar Links */}
//         <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
//           <LiElement>Home</LiElement>
//           <LiElement>About Us</LiElement>
//           <LiElement>Services</LiElement>
//           <LiElement>Contact</LiElement>
//         </ul>

//         {/* CTA Button */}
//         <div className="mt-8 px-6">
//           <Button>Get Started</Button>
//         </div>
//       </div>

//       {/* Hero Section Content */}
//       <section className="hero-content w-full ">
//         <p className="text-[#ffff] md:text-[28px]">Welcome to C'est Bon LLC</p>
//         <h1 className="text-[#ffffff] font-bold text-6xl max-lg:text-7xl max-sm:text-3xl max-md:text-5xl mt-4">
//           Driven by <span className="text-[#FFD700]"> Excellence </span>,
//           Inspired by <span className="text-[#FFD700]"> Innovation </span>.
//           Committed to You
//         </h1>
//         <div className="flex gap-3 mt-5">
//           <HeroButton
//             backgroundColor="#D9D9D9"
//             transparent={true}
//             color="#000000"
//             onclick={() => {
//               const section = document.getElementById("services");
//               if (section) {
//                 section.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//           >
//             Explore Services
//           </HeroButton>
//           <HeroButton
//             backgroundColor="#FFD700"
//             color="#032186"
//             onclick={() => {
//               const section = document.getElementById("contact");
//               if (section) {
//                 section.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//           >
//             Contact Us
//           </HeroButton>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default HeroSection;

import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import LiElement from "./LiElement";

function HeroSection() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="home" className="hero relative w-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('aerial-view-container-cargo-ship-sea.jpg')] -z-10 bg-cover bg-center blur-[5px] brightness-75 opacity-70"></div>
      <nav className="navbar sticky top-10 flex items-center px-5 h-12 mx-4 justify-between rounded-4xl">
        <div className="md:hidden">
          <Menu
            style={{ color: "white" }}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
        </div>

        <div className="hidden md:flex text-white font-medium text-[20px]">
          C'est Bon LLC
        </div>
        <ul className="hidden md:flex gap-4">
          <LiElement onClick={() => handleScroll("home")}>Home</LiElement>
          <LiElement onClick={() => handleScroll("about")}>About Us</LiElement>
          <LiElement onClick={() => handleScroll("services")}>
            Services
          </LiElement>
        </ul>

        <Button onclick={() => handleScroll("steps")}>Get Started</Button>
      </nav>

      {/* Sidebar Component */}
      <Sidebar open={open} setOpen={setOpen} />

      <section data-aos="fade-up" className="hero-content w-full ">
        <p className="text-[#ffff] md:text-[28px]">Welcome to C'est Bon LLC</p>
        <h1 className="text-[#ffffff] font-bold text-6xl max-lg:text-7xl max-sm:text-3xl max-md:text-5xl mt-4">
          Driven by <span className="text-[#FFD700]"> Excellence </span>,
          Inspired by <span className="text-[#FFD700]"> Innovation </span>.
          Committed to You
        </h1>
        <div className="flex gap-3 mt-5">
          <HeroButton
            backgroundColor="#D9D9D9"
            transparent={true}
            color="#000000"
            onclick={() => {
              const section = document.getElementById("services");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore Services
          </HeroButton>
          <HeroButton
            backgroundColor="#FFD700"
            color="#032186"
            onclick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </HeroButton>
        </div>
        //{" "}
      </section>
    </main>
  );
}

export default HeroSection;

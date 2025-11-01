import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Info({ icon, title, text }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // smooth motion
      once: false, // animate only once
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="w-70 pl-5 pr-2 bg-white shadow py-7 lg:py-10  rounded-2xl flex-1"
    >
      <div className="py-2 ">{icon}</div>
      <h1 className="font-semibold lg:text-[20px] text-[#174A87] py-2">
        {title}
      </h1>
      <p className="w-full pt-1 text-[#0f315b] text-base ">{text}</p>
    </div>
  );
}

export default Info;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaClipboardList,
  FaFileSignature,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    title: "Request our service",
    desc: "Choose the type of service you need and provide basic details to get started.",
    icon: <FaClipboardList size={28} />,
  },
  {
    title: "We review your submission",
    desc: "Our team checks your request and prepares the best solution tailored for you.",
    icon: <FaFileSignature size={28} />,
  },
  {
    title: "Processing & Support",
    desc: "We handle paperwork, logistics, and give regular updates throughout.",
    icon: <FaTruck size={28} />,
  },
  {
    title: "Completed successfully",
    desc: "Receive your approved document or delivered item smoothly and on time.",
    icon: <FaCheckCircle size={28} />,
  },
];

function StepProgress() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // smooth motion
      once: false, // animate only once
    });
  }, []);
  return (
    <section className="py-2 mt-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl md:text-4xl  font-bold text-blue-900 mb-14 text-center">
          A Simpler Way to Request Your Service
        </h2>

        <div
          data-aos="fade-up"
          className="relative border-l-2 border-gray-300 ml-6 md:ml-10"
        >
          {steps.map((step, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="mb-16 flex items-start gap-6"
            >
              {/* Circle with Icon */}
              <div
                className="absolute -left-4 md:-left-6 w-10 h-10 bg-blue-900 text-white 
                  flex items-center justify-center rounded-full shadow-lg"
              >
                {step.icon}
              </div>

              {/* Content */}
              <div data-aos="fade-up" className="ml-8 md:ml-12">
                <h3 className="text-[16px] lg:text-xl font-semibold text-blue-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed w-[95%] md:w-[80%]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepProgress;

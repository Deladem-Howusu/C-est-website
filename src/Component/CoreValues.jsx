import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Info from "./CoreValueInfo";
import {
  Brain,
  CircleStar,
  GraduationCap,
  HeartHandshake,
  ScanSearch,
  Trees,
} from "lucide-react";
import Button from "./Button";
import CoreValuesDetails from "./CoreInfo";

function CoreValues() {
  const [showDetails, setShowDetails] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
    });

    const handleResize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);
      if (large) setShowDetails(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="p-5 pb-20  pt-20 shadow-2xs relative">
      <div
        data-aos="fade-down"
        className="flex flex-col w-full items-center py-5"
      >
        <h1 className="lg:text-3xl font-semibold text-[#081948]">
          Our Core Values
        </h1>
        <p className="text-[#174A87] text-[14px] md:text-[20px] lg:text-[20px] mt-2 text-center font-medium">
          We embrace creativity and modern solutions to continuously improve and
          adapt in a dynamic market.
        </p>
      </div>

      {/* Values Grid */}
      <div className="flex flex-col gap-10 items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-10">
          <Info
            style={{ color: "#174A87" }}
            icon={<HeartHandshake />}
            title="Integrity"
            text="Honesty and transparency guide all our business dealings."
          />
          <Info
            icon={<ScanSearch />}
            title="Customer Focus"
            text="Customers are at the heart of everything, driving our success."
          />
          <Info
            icon={<GraduationCap />}
            title="Excellence"
            text="Striving for the highest standards in service delivery, product quality, and reliability."
          />
        </div>

        {/* Second row for large screens */}
        <div className="hidden lg:flex gap-10">
          <Info
            icon={<Trees />}
            title="Sustainability"
            text="Responsible practices ensure long-term growth."
          />
          <Info
            icon={<Brain />}
            title="Collaboration"
            text="Teamwork and partnerships create value for stakeholders and communities."
          />
          <Info
            icon={<CircleStar />}
            title="Diversity & Inclusion"
            text="Fairness and respect thrive by celebrating differences."
          />
        </div>

        {/* Mobile button */}
        {!isLargeScreen && (
          <div className="lg:hidden">
            <Button onclick={() => setShowDetails(true)}>See All</Button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showDetails && (
        <CoreValuesDetails onClose={() => setShowDetails(false)} />
      )}
    </section>
  );
}

export default CoreValues;

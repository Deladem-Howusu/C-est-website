import Button from "./Button";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutDetails from "./AboutDetails";

function AboutSection() {
  const [showDetails, setShowDetails] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    const handleResize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);
      // close modal when screen becomes large
      if (large) setShowDetails(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center px-5 py-10 min-h-screen"
    >
      {/* Header */}
      <div className="lg:w-3/4 md:w-4/5 w-full">
        <h1 className="md:text-3xl sm:text-2xl font-semibold text-[#21457A] pb-5">
          About C'est Bon
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[#174A87] lg:w-2/3 md:w-3/4 w-full lg:text-[20px] lg:leading-10 font-medium"
        >
          C'est Bon Group LLC is a dynamic multi-sector enterprise built on
          innovation, reliability, and customer satisfaction.
        </p>
      </div>

      {/* Content Section */}
      <div className="lg:flex lg:items-start lg:gap-10 w-full lg:w-5/6 mt-10">
        {/* Image */}
        <figure
          data-aos="fade-left"
          className="lg:w-1/2 my-10 lg:my-0 flex justify-center"
        >
          <img
            src="earth-globe-with-pointers-delivery-meeting-business-people.png"
            alt="img"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </figure>

        {/* Mission & Vision Cards */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Mission Card */}
          <div
            data-aos="fade-right"
            style={{
              background: "linear-gradient(90deg, #3A80E2 0%, #20467C 100%)",
            }}
            className="rounded-3xl p-6 lg:p-8 text-white shadow-lg"
          >
            <h1 className="mb-4 font-semibold text-2xl underline">Mission</h1>
            <p className="text-[18px] font-medium leading-relaxed mb-6">
              To provide reliable and innovative solutions across service
              delivery, cosmetic product trading, and transportation—ensuring
              customer satisfaction through quality, efficiency, and trust.
            </p>

            {/* Show Learn More only on small screens */}
            {!isLargeScreen && (
              <Button onclick={() => setShowDetails(true)}>Learn more</Button>
            )}
          </div>

          {/* Vision Card — visible on large screens */}
          {isLargeScreen && (
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              style={{
                background: "linear-gradient(90deg, #20467C 0%, #3A80E2 100%)",
              }}
              className="rounded-3xl p-6 lg:p-8 text-white shadow-lg"
            >
              <h1 className="mb-4 font-semibold text-2xl underline">Vision</h1>
              <p className="text-[18px] font-medium leading-relaxed">
                To be a globally recognized brand that bridges services, trade,
                and transport with excellence—empowering people, connecting
                communities, and redefining reliability.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for mobile */}
      {showDetails && <AboutDetails onClose={() => setShowDetails(false)} />}
    </section>
  );
}

export default AboutSection;

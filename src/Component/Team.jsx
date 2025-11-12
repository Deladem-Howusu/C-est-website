// TeamSection.jsx
import { FaFacebookF, FaPinterestP, FaDribbble } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Bernard Kwame Owusu",
    role: "Group Principal Founder",
    image: "/bernard.jpg",
    description:
      "Bernard is the Founder and CEO of C'est Bon Group LLC. With a strong background in Banking, Finance, Auditing, and General Consultancy, he leads the company to provide reliable and innovative solutions across service delivery, visa consulting, product trading, transportation, and procurement.",
  },
  {
    name: "Betty O. Akyempemhene Snr",
    role: "GENERAL MANAGER",
    image: "/member.jpg",
    description:
      "Betty is the General Manager of C'est Bon Group LLC responsible for overseeing daily operations, strategic planning, and organizational growth. With extensive experience emanating from general consultancy she provides leadership across all departments to ensure efficient performance, quality service delivery, and strong customer relationships and achieve company growth and trust.",
  },
  {
    name: "Josephine Opoku",
    role: "Head of Marketing",
    image: "/head-of-marketing.jpg",
    description:
      "Josephine Opoku serves as the Head of Marketing at C'est Bon Group where she leads the strategy and execution of all brand, communications, and market growth initiatives. With a bachelor's degree in marketing from Ghana Baptist University College and extensive experience in consumer engagement, digital strategy, brand development. Josephine brings a strong record of building impactful marketing programs that drive business results.",
  },
  {
    name: "Isaac Amissah",
    role: "Chief Financial Officer",
    image: "/principal-founder.jpg",
    description:
      "In this role, Isaac Amissah leads the finance team in financial forecasting, cost control, compliance, and investment planning, working closely with executive leadership to support informed decision-making and long-term strategic goals. Isaac holds a degree program commerce from University of Cape Coast, Ghana.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white" id="team">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#081948] mb-3">
          Behind the Screens
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team is the heart of our process — bringing together a wealth of
          expertise and a passion for innovation. Get acquainted with the people
          powering your digital presence.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1} // 👈 One full card at a time
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop={true}
        >
          {teamMembers.map((m, i) => (
            <SwiperSlide key={i}>
              <article
                className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md overflow-hidden items-center justify-center gap-10 p-6"
                aria-labelledby={`team-${i}-name`}
              >
                {/* Image (left side) */}
                <div className="lg:w-1/3 w-full h-fit lg:h-fit">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full lg:object-cover  rounded-2xl lg:rounded-2xl "
                  />
                </div>

                {/* Text (right side) */}
                <div className="p-6 md:p-8 flex flex-col justify-between lg:w-1/2">
                  <div>
                    <h3
                      id={`team-${i}-name`}
                      className="text-2xl font-semibold text-[#081948]"
                    >
                      {m.name}
                    </h3>
                    <p className="text-[#1E6FDB] text-sm font-medium mt-1">
                      {m.role}
                    </p>
                    <p className="text-gray-600 mt-4 text-base leading-7">
                      {m.description}
                    </p>
                  </div>

                  {/* <div className="mt-6 flex items-center gap-3">
                    <a className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-[#f1f5f9] text-[#1E6FDB] hover:bg-[#fbeab4] transition">
                      <FaFacebookF size={12} />
                    </a>
                    <a className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-[#f1f5f9] text-[#E94F89] hover:bg-[#fbeab4] transition">
                      <FaDribbble size={12} />
                    </a>
                    <a className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-[#f1f5f9] text-[#E66060] hover:bg-[#fbeab4] transition">
                      <FaPinterestP size={12} />
                    </a>
                  </div> */}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Newsletter */}
      {/* <div className="bg-[#0B5DE7] bg-gradient-to-r from-[#0B5DE7] to-[#0B7EEA] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm text-white mb-4">
            Newsletter
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Subscribe to our Newsletter
          </h3>
          <p className="text-white/90 mb-6">
            Fill out the subscription form below and be the first to know about
            promotions, product launches, and insider perks.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:w-[60%] max-w-lg px-4 py-3 rounded-full border border-white/20 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-[#0B5DE7] font-semibold hover:opacity-95 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div> */}
    </section>
  );
}

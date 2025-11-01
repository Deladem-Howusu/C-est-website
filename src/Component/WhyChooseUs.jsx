import {
  FaShieldAlt,
  FaDollarSign,
  FaUsers,
  FaGlobeAmericas,
} from "react-icons/fa";

const features = [
  {
    title: "Trusted & Reliable",
    desc: "We prioritize trust, transparency, and consistency—ensuring every service is delivered professionally.",
    icon: <FaShieldAlt size={26} />,
  },
  {
    title: "Affordable Pricing",
    desc: "Our competitive pricing ensures you get high-quality service without overspending.",
    icon: <FaDollarSign size={26} />,
  },
  {
    title: "Excellent Customer Care",
    desc: "We’re always ready to answer questions, provide updates, and support you throughout the process.",
    icon: <FaUsers size={26} />,
  },
  {
    title: "Local & International Reach",
    desc: "Whether in Ghana, USA, or beyond—our services connect people and make things happen anywhere.",
    icon: <FaGlobeAmericas size={26} />,
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F7F9FC] shadow-2xs">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4"
        >
          Why Choose Us
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-center max-w-2xl mx-auto mb-14"
        >
          There’s a reason individuals and businesses rely on C’est Bon Group
          LLC. We deliver excellence every step of the way.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="text-blue-900 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

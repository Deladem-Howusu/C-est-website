import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
          Get In Touch
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-200 max-w-2xl mx-auto mb-12"
        >
          Reach out to us anytime — we’re here to support your needs in the USA
          and Ghana.
        </p>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Offices */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/20 transition"
          >
            <FaMapMarkerAlt
              size={28}
              className="mx-auto mb-4 text-yellow-400"
            />
            <h3 className="font-semibold text-xl mb-2">Our Offices</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              775 W Flintlock Way, Chandler, Arizona, USA
              <br />
              <br />
              R.Y. 205 Railway, Kumasi, Ghana
            </p>
          </div>

          {/* Phone */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/20 transition"
          >
            <FaPhoneAlt size={28} className="mx-auto mb-4 text-yellow-400" />
            <h3 className="font-semibold text-xl mb-2">Phone</h3>
            <div className="flex flex-col text-sm">
              <a
                href="tel:+18062830571"
                className="text-gray-200 hover:text-yellow-300 transition"
              >
                +1 806 283 0571 (USA)
              </a>
              <a
                href="tel:+233552282230"
                className="mt-2 text-gray-200 hover:text-yellow-300 transition"
              >
                +233 55 228 2230 (Ghana)
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/20 transition"
          >
            <FaEnvelope size={28} className="mx-auto mb-4 text-yellow-400" />
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <a
              href="mailto:Cestbongrpltd@yahoo.com"
              className="text-gray-200 text-sm hover:text-yellow-300 transition"
            >
              Cestbongrpltd@yahoo.com
            </a>
          </div>
        </div>

        <div className="mt-10 text-center flex justify-center items-center">
          <a
            href="https://wa.me/233552282230"
            target="_blank"
            className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

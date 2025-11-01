import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1A44] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold tracking-wide mb-3">
            C’est Bon LLC
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Delivering trusted service solutions in deliveries, travel
            assistance and product distribution. Connecting people with
            convenience and efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            {["Home", "About Us", "Services", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            {["Deliveries", "Product Sales", "Travel Assistance"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
          <p className="text-gray-300 text-sm mb-4">
            Email: support@cestbon.com
          </p>

          <div className="flex items-center gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 
                           rounded-full hover:bg-yellow-400 text-white hover:text-blue-900 
                           transition-all cursor-pointer"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600/50 mt-10 pt-6 text-center">
        <p className="text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} C’est Bon Group LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

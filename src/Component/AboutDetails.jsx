import { X } from "lucide-react";

function AboutDetails({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-[#21457A] text-2xl font-bold mb-4 text-center">
          About C'est Bon
        </h2>

        {/* Text */}
        <p className="text-[#174A87] text-[16px] leading-relaxed mb-6">
          C'est Bon Group LLC is a dynamic multi-sector enterprise built on
          innovation, reliability, and customer satisfaction. We deliver
          excellence in service, trading, and logistics — empowering global
          connections through trust and innovation.
        </p>

        {/* Mission */}
        <div
          style={{
            background: "linear-gradient(90deg, #3A80E2  0%, #20467C 100%)",
          }}
          className="rounded-xl p-4 mb-4 text-white shadow-md"
        >
          <h3 className="font-semibold text-xl underline mb-2">Mission</h3>
          <p className="text-[15px] leading-relaxed">
            To provide reliable and innovative solutions across service
            delivery, cosmetic product trading, and transportation—ensuring
            customer satisfaction through quality, efficiency, and trust.
          </p>
        </div>

        {/* Vision */}
        <div
          style={{
            background: "linear-gradient(90deg, #20467C 0%, #3A80E2 100%)",
          }}
          className="rounded-xl p-4 text-white shadow-md"
        >
          <h3 className="font-semibold text-xl underline mb-2">Vision</h3>
          <p className="text-[15px] leading-relaxed">
            To be a globally recognized brand that bridges services, trade, and
            transport with excellence—empowering people, connecting communities,
            and redefining reliability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;

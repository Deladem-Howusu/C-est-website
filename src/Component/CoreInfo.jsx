import { X } from "lucide-react";

function CoreValuesDetails({ onClose }) {
  const values = [
    {
      title: "Integrity",
      text: "Honesty and transparency guide all our business dealings.",
    },
    {
      title: "Customer Focus",
      text: "Customers are at the heart of everything, driving our success.",
    },
    {
      title: "Excellence",
      text: "Striving for the highest standards in service delivery, product quality, and reliability.",
    },
    {
      title: "Sustainability",
      text: "Responsible practices ensure long-term growth and community well-being.",
    },
    {
      title: "Collaboration",
      text: "Teamwork and partnerships create value for stakeholders and communities.",
    },
    {
      title: "Diversity & Inclusion",
      text: "Fairness and respect thrive by celebrating differences.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-[#21457A] text-2xl font-bold mb-6 text-center">
          Our Core Values
        </h2>

        {/* Values List */}
        <div className="flex flex-col gap-5 text-[#174A87]">
          {values.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-[15px] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreValuesDetails;

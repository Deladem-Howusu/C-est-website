import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    travel: {
      title: "Travelling Assistance",
      description:
        "We simplify your travel experience with expert support — from visa documentation to form filling (including USCIS), itinerary planning, and travel consultancy. Whether for study, work, or leisure, C’est Bon ensures you travel stress-free and confidently.",
      image: "/visa-application-composition-with-europe-america-flag.jpg",
    },
    products: {
      title: "Product Sales",
      description:
        "C’est Bon provides a curated selection of high-quality cosmetics and lifestyle products designed to enhance your beauty, confidence, and wellbeing. Our global partnerships ensure authenticity and customer satisfaction across all our product lines.",
      image: "/8502313_188.jpg",
    },
    delivery: {
      title: "Delivery Services",
      description:
        "We offer reliable, efficient, and timely delivery of goods and packages. Whether domestic or international, we handle your items with care, ensuring they reach the destination safely and on schedule.",
      image: "/close-up-delivery-person-offering-parcel-client.jpg",
    },
  };

  const service = services[id];

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-500">Service not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Related services (excluding the current one)
  const relatedServices = Object.entries(services)
    .filter(([key]) => key !== id)
    .map(([key, value]) => ({
      id: key,
      ...value,
    }));

  return (
    <div className="min-h-screen bg-[#F7F9FC] px-5 lg:px-20 py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#21457A] hover:text-blue-700 mb-6"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Main Section */}
      <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-lg">
        <h1 className="text-[#21457A] font-bold text-3xl mb-5">
          {service.title}
        </h1>
        <p className="text-gray-700 text-lg leading-8 mb-8">
          {service.description}
        </p>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl object-cover object-center shadow-md mb-10"
        />

        {/* Related Services */}
        <div className="mt-10">
          <h2 className="text-[#21457A] text-2xl font-bold mb-5">
            Related Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((item) => (
              <div
                key={item.id}
                className="bg-[#fafafa] p-5 rounded-xl shadow hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/service/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-[#21457A] font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description.substring(0, 90)}...
                </p>
                <button className="mt-4 text-blue-700 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;

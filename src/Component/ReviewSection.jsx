import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "USA",
    text: "The service was smooth and reliable from start to finish. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Emmanuel Owusu",
    country: "Ghana",
    text: "Fast processing and great support. They kept me updated every step of the way.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Linda Martins",
    country: "UK",
    text: "Amazing experience! Quality products delivered as expected and on time.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade"
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4"
        >
          What Our Customers Say
        </h2>

        <p
          data-aos="fade"
          data-aos-delay="200"
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          Real feedback from real people who trusted our services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div
              key={index}
              data-aos="fade"
              data-aos-delay={index * 200}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-blue-900">
                    {review.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {review.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

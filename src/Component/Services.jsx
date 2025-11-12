import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Services() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/service/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      id="services"
      className="bg-[#F7F9FC] px-10 py-20 lg:p-20 mt-10 shadow-2xs"
    >
      <div>
        <h1 className="text-[#21457A] font-bold lg:text-3xl text-[20px]">
          Your Gateway to Reliable Solutions
        </h1>
        <p className="text-[12px] font-medium lg:text-[18px] py-4 text-[#174A87]">
          We provide solutions that connect people, simplify travel and deliver
          with trust and efficiency
        </p>
      </div>

      {/* Travelling Assistance */}
      <div className="mt-8">
        <div className="flex lg:flex-row flex-col bg-[#fafafa] lg:h-80 h-fit lg:px-10 pt-5 p-5 rounded-2xl gap-10 shadow">
          <div data-aos="fade-up">
            <h1 className="md:text-[20px] sm:text-2xl font-semibold text-[#21457A] pb-5">
              Travelling Assistance
            </h1>
            <p className="mb-5 text-gray-600 text-base lg:leading-7">
              Guiding individuals through travel processes, including form
              filling (such as USCIS), documentation, and consultancy to make
              journeys stress-free.
            </p>

            <Button onclick={() => handleNavigate("travel")}>Read more</Button>
          </div>

          <div className="bg-white w-full lg:w-200 h-50 lg:h-full">
            <img
              src="visa-application-composition-with-europe-america-flag.jpg"
              className="w-full h-full object-cover rounded-2xl"
              alt="Travel Assistance"
            />
          </div>
        </div>
      </div>

      {/* Product Sales */}
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="mt-8 lg:w-[48%] w-full">
          <div
            data-aos="fade-up"
            className="bg-[#fafafa] h-fit p-5 py-5 rounded-2xl gap-10 shadow"
          >
            <h1 className="md:text-[20px] sm:text-2xl font-semibold text-[#21457A] pb-5">
              Product Sales
            </h1>
            <p className="mb-5 text-gray-600 text-base lg:leading-7">
              Supplying trusted cosmetics and quality products that enhance
              confidence, beauty, and lifestyle.
            </p>

            <Button onclick={() => handleNavigate("products")}>
              Read more
            </Button>

            <div className="bg-white mt-5 w-full h-50">
              <img
                src="8502313_188.jpg"
                className="w-full h-full object-cover rounded-2xl"
                alt="Product Sales"
              />
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-8 lg:w-[48%] w-full">
          <div
            data-aos="fade-up"
            className="bg-[#fafafa] h-fit p-5 rounded-2xl gap-10 shadow"
          >
            <h1 className="md:text-[20px] sm:text-2xl font-semibold text-[#21457A] pb-5">
              Delivery Services
            </h1>
            <p className="mb-5 text-gray-600 text-base lg:leading-7">
              Fast and reliable delivery of items and packages—ensuring your
              goods reach their destination safely and on time.
            </p>

            <Button onclick={() => handleNavigate("delivery")}>
              Read more
            </Button>

            <div className="bg-white mt-5 w-full h-50">
              <img
                src="close-up-delivery-person-offering-parcel-client.jpg"
                className="w-full h-full object-cover rounded-2xl"
                alt="Delivery Service"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

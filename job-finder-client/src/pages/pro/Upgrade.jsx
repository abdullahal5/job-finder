import Navbar from "../../components/Navbar";
import { FaCheck } from "react-icons/fa6";

const Upgrade = () => {
  const data = [
    {
      id: 1,
      packageName: "Free",
      price: 0,
      duration: 1,
      description:
        "Unlock exclusive features and elevate your experience. Choose your membership plan today!",
      features: [
        "Read subscribers-only contents",
        "Get paid for your writing",
        "Get paid for your artwork",
        "Priority Support",
        "Access to early new features",
      ],
      button: "Try 1 Month",
      color: "#a1a1a1",
    },
    {
      id: 2,
      packageName: "Standard",
      description:
        "Exclusive features, elevated experience, and incredible savings! Upgrade your membership today.",
      price: 89,
      duration: 6,
      features: [
        "Cost Saving",
        "Read subscribers-only contents",
        "Get paid for your writing",
        "Get paid for your artwork",
        "Priority Support",
        "Access to early new features",
      ],
      button: "Choose Now",
      color: "#7e22ce",
    },
    {
      id: 3,
      packageName: "Premium",
      description:
        "Limited-time offer! Upgrade to a premium membership and enjoy incredible savings.",
      price: 299,
      duration: 12,
      features: [
        "Read subscribers-only contents",
        "Get paid for your writing",
        "Get paid for your artwork",
        "Priority Support",
        "Access to early new features",
      ],
      button: "Become Family",
      color: "#a1a1a1",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#e4e3f1] via-[#fdf5f5] to-[#f8e8ec] h-auto">
      <Navbar />
      <div className="lg:w-[1300px] md:w-[1100px] mx-auto pt-28">
        <h1 className="text-3xl text-center">
          Our <span className="text-purple-700">Pricing</span> Planes
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-6 xl:gap-10 pt-10">
          {data?.map((item, idx) => (
            <div
              key={idx}
              className={item.id === 2 ? "w-96 h-[650px]" : "w-80 h-[600px]"}
            >
              <div
                className={`border-2 px-5 py-7 rounded-3xl text-center flex flex-col items-center justify-between bg-white`}
                style={{ borderColor: item.color }}
              >
                <div className="pb-2">
                  <h2 className="text-2xl py-3">{item.packageName}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-[55px]">
                    $<span>{item.price}</span>
                  </p>
                  {item.id === 2 && (
                    <span className="text-center bg-purple-600 px-4 py-2 rounded-full text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="space-y-3 mt-5">
                  {item?.features?.map((feature, idx) => (
                    <p className="flex items-center gap-3" key={idx}>
                      <FaCheck fontSize="1.1rem" className="text-green-600 inline" /> {feature}
                    </p>
                  ))}
                </div>
                <button className="bg-purple-700 text-white px-4 py-2 rounded-full mt-5 shadow-2xl">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upgrade;

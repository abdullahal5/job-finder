import { IoTrendingUp } from "react-icons/io5";
import JobCard from "../JobCard";

const Trending = () => {
  const tab = [
    { id: 1, name: "All" },
    { id: 2, name: "Design" },
    { id: 3, name: "Product Management" },
    { id: 4, name: "Data Science" },
    { id: 5, name: "Customer Service" },
    { id: 6, name: "Marketing" },
    { id: 7, name: "Social Media Management" },
  ];
  return (
    <div>
      <div className="lg:w-[1300px] md:w-[1100px] mx-auto py-5 pb-10">
        <div className="text-[#3F3F46] text-center py-5">
          <h1 className="text-center lg:text-5xl md:text-4xl text-3xl gap-4">
            Trending <span className="text-purple-800">Jobs </span>
            <IoTrendingUp className="inline" />
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
          {tab.map((item) => (
            <div key={item.id}>
              <p className="border px-5 py-2 rounded-lg border-purple-700 duration-300 hover:bg-purple-700 hover:text-white cursor-pointer bg-white">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

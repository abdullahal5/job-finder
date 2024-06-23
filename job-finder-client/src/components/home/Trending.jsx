import { IoTrendingUp } from "react-icons/io5";
import JobCard from "../JobCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Trending = () => {
  const [loading, setLoading] = useState(false);
  const [allJobPost, setAllJobPost] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [tabStartIndex, setTabStartIndex] = useState(0);
  const axiosPublic = useAxiosPublic();

  const tab = [
    { id: 1, name: "All" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "Software Development" },
    { id: 4, name: "Graphic Design" },
    { id: 5, name: "Travel" },
    { id: 6, name: "Marketing" },
    { id: 7, name: "E-commerce" },
    { id: 8, name: "Music" },
    { id: 9, name: "Sports" },
    { id: 10, name: "Blog" },
    { id: 11, name: "Teaching" },
  ];

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get(`/job/get-all`);
        const data = response.data.data;
        setAllJobPost(data);
      } catch (error) {
        setAllJobPost([]);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic, selectedTab]);

  useEffect(() => {
    if (allJobPost.length > 0) {
      if (selectedTab === "All") {
        setFilteredData(allJobPost);
      } else {
        const trendingJobs = allJobPost?.filter(
          (job) => job.jobSector.toLowerCase() === selectedTab.toLowerCase()
        );
        setFilteredData(trendingJobs);
      }
    }
  }, [allJobPost, selectedTab]);

  const handleRightClick = () => {
    if (tabStartIndex + 7 < tab.length) {
      setTabStartIndex(tabStartIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (tabStartIndex > 0) {
      setTabStartIndex(tabStartIndex - 1);
    }
  };

  return (
    <div>
      <div className="lg:w-[1300px] md:w-[1100px] w-full mx-auto py-5 pb-10">
        <div className="text-[#3F3F46] text-center py-5">
          <h1 className="text-center lg:text-5xl md:text-4xl text-3xl gap-4">
            Trending <span className="text-purple-800">Jobs </span>
            <IoTrendingUp className="inline" />
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
          <button
            onClick={handleLeftClick}
            disabled={tabStartIndex === 0}
            className="bg-gray-200 disabled:cursor-not-allowed p-3 rounded-full hover:bg-gray-300 duration-300"
          >
            <FaAngleLeft />
          </button>
          {tab.slice(tabStartIndex, tabStartIndex + 7).map((item) => (
            <div
              className="transition-transform duration-300"
              onClick={() => handleTabClick(item.name)}
              key={item.id}
            >
              <p
                className={`border px-5 py-2 rounded-lg border-purple-600 duration-300 cursor-pointer ${
                  selectedTab === item.name
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black hover:bg-purple-700 hover:text-white"
                }`}
              >
                {item.name}
              </p>
            </div>
          ))}
          <button
            onClick={handleRightClick}
            disabled={tabStartIndex + 7 >= tab.length}
            className="bg-gray-200 p-3 disabled:cursor-not-allowed rounded-full hover:bg-gray-300 duration-300"
          >
            <FaAngleRight />
          </button>
        </div>
        <div className="flex items-center justify-center pt-5">
          {loading ? (
            <div className="flex items-center justify-center pt-10">
              <p>Loading jobs...</p>
            </div>
          ) : filteredData?.length === 0 ? (
            <div className="flex items-center justify-center pt-10">
              <p>No trending jobs found.</p>
            </div>
          ) : (
            <div className="flex items-center justify-center pt-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center lg:w-auto md:w-auto w-full lg:mx-0 md:mx-0 mx-2">
                {filteredData?.slice(0, 6).map((item) => (
                  <JobCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;

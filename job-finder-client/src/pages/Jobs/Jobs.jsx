import Footer from "../../components/Footer";
import JobDetailsCard from "../../components/JobDetailsCard";
import Navbar from "../../components/Navbar";
import { TbFilterCheck } from "react-icons/tb";

const Jobs = () => {
  return (
    <div>
      <div className="h-[300px]">
        <Navbar />
        <div className="lg:w-[1300px] md:w-[1100px] mx-auto">
          <div>
            <div className="text-5xl text-[#3F3F46] py-5 pt-28">
              <h1 className=" text-center gap-4">
                Find Your <span className="text-purple-800">Dream Jobs </span>
                Here
              </h1>
            </div>
            <div className="text-center mx-5">
              <input
                type="text"
                className="mx-auto lg:w-96 md:w-96 w-full text-purple-700 border outline-none h-14 rounded-xl px-4 border-purple-700"
                placeholder="Search Jobs"
                required
              />
              <button className="px-4 py-3 lg:mt-0 md:mt-0 mt-2 border rounded-lg ml-5 hover:bg-purple-700 hover:text-white border-purple-700 text-purple-700 duration-300">
                Search
              </button>
            </div>
            <p className="text-center py-4 font-medium">
              Total <span className="text-purple-700">52</span> jobs available
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 lg:hidden md:hidden mx-2">
          <div className="flex items-center justify-center border text-lg gap-2 mx-auto">
            <div className="border flex items-center justify-center gap-2 px-5 py-1 rounded-lg border-purple-700">
              <TbFilterCheck className="text-purple-700" /> Filters
            </div>
          </div>
          <div className="flex items-center justify-center border text-lg gap-2 mx-auto">
            <div className="border flex items-center justify-center gap-2 px-5 py-1 rounded-lg border-purple-700">
              Recommendations
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 pb-10 pt-14">
        <div className="lg:w-[1300px] md:w-[1100px] mx-auto">
          <div className="flex justify-center gap-5 pt-5 items-start">
            <div className="w-80 border rounded-xl bg-white p-5 shadow-md lg:block md:block hidden">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl pb-4">Select Sector</h1>
                  <span className="mb-4 bg-gray-100 px-2 py-1 border rounded-lg cursor-pointer text-sm">
                    Clear
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value="web development"
                      name=""
                      id=""
                    />
                    Web Development
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value="graphic design"
                      name=""
                      id=""
                    />
                    Graphic Design
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="web design" name="" id="" />
                    Web Design
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="E" name="" id="" />
                    E-commerce
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value="web development"
                      name=""
                      id=""
                    />
                    Web Development
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value="web development"
                      name=""
                      id=""
                    />
                    Web Development
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value="web development"
                      name=""
                      id=""
                    />
                    Web Development
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl py-4">Job Type</h1>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="On-site" name="" id="" />
                    On-site
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="Remote" name="" id="" />
                    Remote
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="hybrid" name="" id="" />
                    Hybrid
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="part-time" name="" id="" />
                    Part-Time
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="internship" name="" id="" />
                    Internship
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="full" name="" id="" />
                    Full-time
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl py-4">Desired Stipend ($)</h1>
                <input
                  type="range"
                  className="w-full"
                  min={0}
                  max={10000}
                  defaultValue={4000}
                  step={2000}
                />
                <div className="flex justify-between mt-1 text-gray-600">
                  <span>0</span>
                  <span>2k</span>
                  <span>4k</span>
                  <span>6k</span>
                  <span>8k</span>
                  <span>10k</span>
                </div>
              </div>
              <h1 className="text-2xl py-4">Location</h1>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <input type="radio" name="location" id="" />
                  <p>Asia</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="location" id="" />
                  <p>Europe</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="location" id="" />
                  <p>Anywhere</p>
                </div>
              </div>
              <h1 className="text-2xl py-4">Experience Level</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" name="experience" id="" />
                  <p>Entry Level</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="experience" id="" />
                  <p>Mid Level</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="experience" id="" />
                  <p>Senior Level</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="experience" id="" />
                  <p>Executive</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="experience" id="" />
                  <p>Senior-Mid</p>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:mt-0 md:mt-0 mt-32">
              <div className="grid grid-cols-1 gap-5 mx-2">
                <JobDetailsCard />
                <JobDetailsCard />
                <JobDetailsCard />
                <JobDetailsCard />
                <JobDetailsCard />
                <JobDetailsCard />
              </div>
            </div>
            <div className="w-80 border rounded-xl bg-white p-5 h-[600px] shadow-md lg:block md:block hidden"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;

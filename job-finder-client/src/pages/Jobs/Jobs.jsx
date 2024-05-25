import Footer from "../../components/Footer";
import JobDetailsCard from "../../components/JobDetailsCard";
import Navbar from "../../components/Navbar";
import { TbFilterCheck } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import Video from "../../components/Video";

const Jobs = () => {
  const handleSector = () => {
    const checkedSectors = Array.from(
      document
        .querySelector("#sectorForm")
        .querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    localStorage.setItem("sector", checkedSectors);
  };

  const handleJobType = () => {
    const checkedSectors = Array.from(
      document
        .querySelector("#jobType")
        .querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    console.log(checkedSectors);
  };

  const handleStipend = (e) => {
    console.log(parseInt(e.target.value));
  };

  const handleLocation = () => {
    const checkedSectors = Array.from(
      document
        .querySelector("#location")
        .querySelectorAll('input[type="radio"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    console.log(checkedSectors);
  };

  const handleExperience = () => {
    const checkedSectors = Array.from(
      document
        .querySelector("#experience")
        .querySelectorAll('input[type="radio"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    console.log(checkedSectors);
  };

  const handleClearFilters = () => {
    const sectorForm = document.getElementById("sectorForm");
    const jobType = document.getElementById("jobType");
    const stipend = document.getElementById("stipend");
    const location = document.getElementById("location");
    const experience = document.getElementById("experience");
    sectorForm
      .querySelectorAll('input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
    jobType.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    location.querySelectorAll('input[type="radio"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    experience.querySelectorAll('input[type="radio"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    stipend.value = 4000;
  };

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
                  <h1 className="text-2xl pb-4">Filter</h1>
                  <button
                    onClick={handleClearFilters}
                    type="reset"
                    className="mb-4 bg-gray-100 px-2 py-1 border rounded-lg cursor-pointer text-sm"
                  >
                    Clear
                  </button>
                </div>
                <h1 className="text-2xl pb-4">Select Sector</h1>
                <form
                  id="sectorForm"
                  onChange={handleSector}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="web development" />
                    Web Development
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="software development" />
                    Software Development
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="hardware engineering" />
                    Hardware Engineering
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="web design" />
                    Web Design
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="graphic design" />
                    Graphic Design
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="e-commerce" />
                    E-commerce
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="music" />
                    Music
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="sports" />
                    Sports
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="travel" />
                    Travel
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="marketing" />
                    Marketing
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="teaching" />
                    Teaching
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="blog" />
                    Blog
                  </div>
                </form>
              </div>
              <div>
                <h1 className="text-2xl py-4">Job Type</h1>
                <form
                  id="jobType"
                  onChange={handleJobType}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="On-site" />
                    On-site
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="Remote" />
                    Remote
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="hybrid" />
                    Hybrid
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="part-time" />
                    Part-Time
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="internship" />
                    Internship
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" value="full-time" />
                    Full-time
                  </div>
                </form>
              </div>
              <div>
                <h1 className="text-2xl py-4">Desired Stipend ($)</h1>
                <input
                  type="range"
                  className="w-full"
                  min={0}
                  id="stipend"
                  max={10000}
                  onChange={handleStipend}
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
              <form
                id="location"
                onChange={handleLocation}
                className="flex items-center gap-5"
              >
                <div className="flex items-center gap-2">
                  <input type="radio" value="asia" />
                  <p>Asia</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="europe" />
                  <p>Europe</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="anywhere" />
                  <p>Anywhere</p>
                </div>
              </form>
              <h1 className="text-2xl py-4">Experience Level</h1>
              <form
                id="experience"
                onChange={handleExperience}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <input type="radio" value="entry" />
                  <p>Entry Level</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="mid" />
                  <p>Mid Level</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="senior" />
                  <p>Senior Level</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="Executive" />
                  <p>Executive</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="seniormid" />
                  <p>Senior-Mid</p>
                </div>
              </form>
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
            <div className="w-80 border rounded-xl bg-white h-[600px] shadow-md lg:block md:block hidden px-5 py-4">
              <h1 className="text-2xl pb-4 text-center">
                Recommended <br /> for you
              </h1>
              <div className="w-full">
                <p className="text-gray-600 pb-3 text-sm">
                  step-1: How to crack virtual interview
                </p>
                <Video
                  src={
                    "https://www.youtube.com/embed/PpbhaVjV2QI?si=2z7oqds1YB2O6f2N"
                  }
                />
                <p className="text-gray-600 pt-5 pb-3 text-sm">
                  step-2: How to crack virtual interview
                </p>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-40">
                    <p className="text-xl block">
                      Available for <br />
                      <strong>
                        <img
                          src="https://i.ibb.co/rQCTqNV/diamond-1.png"
                          className="w-7 inline"
                          alt=""
                        />{" "}
                        Diamond
                      </strong>{" "}
                      user
                    </p>
                    <button className="sm:text-sm bg-purple-600 text-white rounded-lg px-3 py-2 hover:bg-purple-700 duration-300 mt-2 flex items-center gap-2 mx-auto cursor-pointer">
                      <FaCrown fontSize="1.3rem" className="text-yellow-400" />
                      Be pro
                    </button>
                  </div>
                  <div className="blur text-center select-none pt-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit fuga nam iusto blanditiis culpa voluptatem
                      quibusdam, dolorum sapiente magnam ex?
                    </p>
                    <button
                      disabled
                      className="text-white bg-purple-600 mt-4 rounded-xl"
                    >
                      Apply Here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;

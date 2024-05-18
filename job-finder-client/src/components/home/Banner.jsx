const Banner = () => {
  return (
    <div className="relative py-16 overflow-hidden lg:w-full md:w-[1100px] mx-auto">
      <div className="absolute top-0 right-0 -z-10">
        <div className="w-96 h-96 rounded-full blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="w-96 h-96 rounded-full blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-200"></div>
        <div className="w-64 h-64 rounded-full blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-100 via-teal-200 to-blue-200"></div>
        <div className="w-32 h-32 rounded-full blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-300 to-Fuchsia-300"></div>
        <div className="w-32 h-32 rounded-full blur-3xl bg-opacity-60 bg-gradient-to-r from-blue-200 via-rose-300 to-violet-300"></div>
      </div>
      <div>
        <div className="pt-36 text-center px-2 mx-auto">
          <h1 className="lg:text-6xl md:text-5xl text-5xl text-[#3F3F46]">
            Search Apply & <br /> Get
            <span className="text-purple-800"> Your Dream </span>Job <br />
            By Job Finder
          </h1>
          <p className="my-7 lg:w-[900px] px-5 mx-auto text-lg text-gray-600 text-center">
            Unlock boundless career prospects with our comprehensive job finding
            website. Navigate through a myriad of employment opportunities
            perfectly suited to your qualifications and aspirations.
          </p>
          <button className="bg-purple-700 text-white px-10 py-2 rounded-full focus:bg-purple-700 active:bg-purple-800">
            Explore Our Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

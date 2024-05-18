import { MdNotificationsActive } from "react-icons/md";

const JobAlert = () => {
  return (
    <div className="lg:w-[1300px] md:w-[1100px] w-full mx-auto pt-14">
      <div className="bg-slate-100 text-black rounded-xl py-5 px-5">
        <div className="flex lg:flex-row md:flex-row flex-col items-start lg:justify-between md:justify-between justify-center">
          <div>
            <h1 className="lg:text-5xl md:text-4xl text-3xl gap-4 pt-5 text-center">
              Never Miss
              <span className="text-purple-700"> A Job Alert</span>
              <MdNotificationsActive className="text-purple-700 inline pl-2" />
            </h1>
            <p className="text-xl pt-2 text-gray-600 lg:text-start md:text-start text-center">
              No spam, Only Job Alerts
            </p>
            <div className="py-4">
              <form className="lg:text-start md:text-start text-center">
                <input
                  className="lg:w-96 md:w-96 w-full h-14 rounded-xl bg-white shadow-md border outline-none px-4 text-purple-800"
                  type="email"
                  placeholder="Jhon@gmail.com"
                  required
                />
                <button className="bg-purple-700 text-white px-4 py-4 rounded-lg ml-4 gap-2 focus:bg-purple-700 active:bg-purple-800 lg:mt-0 md:mt-0 mt-4">
                  Subscribe
                </button>
              </form>
              <p className="pt-9 text-xl text-gray-600 lg:text-start md:text-start text-center">
                May your job bring joy, your career great cheer,
                <br /> With success and fulfillment, year after year. ✨😊
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-96"
              src="https://i.ibb.co/kB9LbR4/undraw-subscribe-vspl-1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAlert;

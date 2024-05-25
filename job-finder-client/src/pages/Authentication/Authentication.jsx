import { useState } from "react";
import Navbar from "../../components/Navbar";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div className="lg:w-[1300px] md:w-[1100px] mx-auto">
        <div className="flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center gap-10 pt-24 mx-2">
          <div>
            <h1 className="text-5xl text-center">Welcome Back</h1>
            <p className="text-lg text-gray-600 pt-1 text-center">
              Please enter your details here
            </p>
            <div className="w-full py-5">
              <ul className="flex items-center justify-around bg-gray-200 rounded-xl p-1 w-[100%] duration-300">
                <li className="w-[50%]">
                  <button
                    className={`${
                      activeTab === "login"
                        ? " bg-white py-3 rounded-xl text-purple-700 border-purple-600 border"
                        : ""
                    } inline-block w-full font-semibold`}
                    onClick={() => handleTabChange("login")}
                  >
                    Login
                  </button>
                </li>
                <li className="w-[50%]">
                  <button
                    className={`${
                      activeTab === "signup"
                        ? " bg-white py-3 rounded-xl text-purple-700 border-purple-600 border"
                        : ""
                    } inline-block w-full font-semibold`}
                    onClick={() => handleTabChange("signup")}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
              <div className="mt-8">
                {activeTab === "login" && (
                  <form>
                    <div className="relative">
                      <label className="pl-1">Enter Your E-mail</label>
                      <input
                        type="email"
                        className="w-full rounded-xl py-4 bg-gray-200 pl-12 pr-2  outline-none mt-2"
                        placeholder="example@gmail.com"
                        required
                      />
                      <MdOutlineEmail
                        fontSize="2.5rem"
                        className="absolute text-gray-600 left-0 top-10 pl-3"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="relative">
                        <label className="pl-1">Enter Your Password</label>
                        <input
                          type={isShowPassword ? "text" : "password"}
                          className="w-full rounded-xl py-4 bg-gray-200 pl-12 pr-2  outline-none mt-2"
                          placeholder="up to 8 characters"
                          required
                        />
                        <IoIosLock
                          fontSize="2.5rem"
                          className="absolute text-gray-600 left-0 top-10 pl-3"
                        />
                        {isShowPassword ? (
                          <FaEyeSlash
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            fontSize="1.2rem"
                            className="absolute right-4 text-gray-600 top-[51px] cursor-pointer"
                          />
                        ) : (
                          <FaEye
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            fontSize="1.2rem"
                            className="absolute right-4 text-gray-600 top-[51px] cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <button className="bg-purple-700 text-white w-full text-center mx-auto py-3 mt-7 rounded-lg focus:bg-purple-700 active:bg-purple-800">
                        Login
                      </button>
                    </div>
                  </form>
                )}
                {activeTab === "signup" && (
                  <form>
                    <div className="relative">
                      <label className="pl-1">Enter Your Name</label>
                      <input
                        type="text"
                        className="w-full rounded-xl py-4 bg-gray-200 pl-12 pr-2  outline-none mt-2"
                        placeholder="Jhon doe"
                        required
                      />
                      <FaUser
                        fontSize="2rem"
                        className="absolute text-gray-600 left-0 top-11 pl-3"
                      />
                    </div>
                    <div className="relative pt-5">
                      <label className="pl-1">Enter Your E-mail</label>
                      <input
                        type="email"
                        className="w-full rounded-xl py-4 bg-gray-200 pl-12 pr-2  outline-none mt-2"
                        placeholder="example@gmail.com"
                        required
                      />
                      <MdOutlineEmail
                        fontSize="2.5rem"
                        className="absolute text-gray-600 left-0 top-[61px] pl-3"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="relative">
                        <label className="pl-1">Enter Your Password</label>
                        <input
                          type={isShowPassword ? "text" : "password"}
                          className="w-full rounded-xl py-4 bg-gray-200 pl-12 pr-2  outline-none mt-2"
                          placeholder="up to 8 characters"
                          required
                        />
                        <IoIosLock
                          fontSize="2.5rem"
                          className="absolute text-gray-600 left-0 top-10 pl-3"
                        />
                        {isShowPassword ? (
                          <FaEyeSlash
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            fontSize="1.2rem"
                            className="absolute right-4 text-gray-600 top-[51px] cursor-pointer"
                          />
                        ) : (
                          <FaEye
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            fontSize="1.2rem"
                            className="absolute right-4 text-gray-600 top-[51px] cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <button className="bg-purple-700 text-white w-full text-center mx-auto py-3 mt-7 rounded-lg focus:bg-purple-700 active:bg-purple-800">
                        Sign Up
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <img src="https://i.ibb.co/vLKHwZK/Login.gif" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Authentication;

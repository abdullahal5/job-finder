import { BsDiscord } from "react-icons/bs";
import { FaFacebook, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:w-[1300px] md:w-[1100px] mx-auto">
      <hr className="my-10 dark:border-neutral-600" />
      <div className="flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center justify-around gap-5 text-zinc-600">
        <div className="w-[300px] dark:text-zinc-300 lg:text-start md:text-start text-center">
          <div className="lg:w-auto md:w-auto w-full">
            <div className="flex items-center gap-2">
              <img
                className="w-10"
                src="https://i.ibb.co/PzM4Gjs/search.png"
                alt=""
              />
              <h1 className="text-2xl">
                Job<span className="text-purple-800">Finder</span>
              </h1>
            </div>
          </div>
          <p className="text-md pt-5">
            This is a Job portal website. You can search, apply and be hired.
            Let&apos;s shine our career with this platform.
          </p>
        </div>
        <div className="dark:text-zinc-300">
          <p className="text-3xl font-semibold dark:text-zinc-300">Pages</p>
          <div className="dark:text-zinc-300 flex items-center flex-col pt-2">
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              href="/about"
            >
              Jobs
            </Link>
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              href="/projects"
            >
              Company
            </Link>
            {/* <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              href="/achievements"
            >
              Achievements
            </Link> */}
          </div>
        </div>
        <div className="dark:text-zinc-300 text-center">
          <p className="text-3xl pb-5 font-semibold">Important Links</p>
          <div className="text-zinc-600 flex items-center gap-6 pt-7 dark:text-zinc-500">
            <a target="_blank" rel="noopener noreferrer">
              <MdOutlineMailOutline
                fontSize={"1.7rem"}
                href="https://gmail.com"
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com"
            >
              <FaGithubAlt
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com"
            >
              <FaLinkedinIn
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com"
            >
              <FaFacebook
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.com"
            >
              <BsDiscord
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-5 dark:border-neutral-600" />
      <p className="text-center text-zinc-500 pb-5">
        ALL RIGHTS RESERVED @2024 BY FAHIM
      </p>
    </div>
  );
};

export default Footer;

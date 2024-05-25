import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="text-center mx-auto">
        <h1 className="text-3xl font-medium">
          Oops! <span className="text-purple-700">Something Went</span> Wrong
        </h1>
        <p className="py-1 text-gray-600 text-lg">Best wishes for next time</p>
        <img
          src="https://i.ibb.co/FqcNTwL/undraw-Page-not-found-re-e9o6-removebg-preview.png"
          alt=""
        />
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-700 text-white text-center mx-auto py-2 px-5 rounded-lg focus:bg-purple-700 active:bg-purple-800 flex items-center gap-2"
        >
          <IoArrowBack /> Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

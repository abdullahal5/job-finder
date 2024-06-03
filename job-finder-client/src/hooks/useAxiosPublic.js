import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://job-finder-server-flame.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

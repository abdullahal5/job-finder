import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "../../components/home/Banner";
import Company from "../../components/home/Company";
import JobAlert from "../../components/home/JobAlert";
import Step from "../../components/home/Step";
import Trending from "../../components/home/Trending";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Trending />
      <Company />
      <Step />
      <JobAlert />
      <Footer />
    </div>
  );
};

export default Home;

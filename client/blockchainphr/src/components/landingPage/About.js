import Footer from "./Footer";
import Navbar from "./Navbar";
import health from "../../assets/img/landingPage/health.jpg";
import data from "../../assets/img/landingPage/data.jpg";
import control from "../../assets/img/landingPage/control.jpg";
const About = () => {
  return (
    <div className="flex flex-col h-screen body lg:overflow-hidden lg:h-screen max-h-min ">
      <Navbar></Navbar>
      <div className="flex justify-center p-9 ">
        <div className="grid grid-cols-3 gap-40 ">
          <div className="flex flex-col items-center transition-transform 0.5s hover:scale-105 ">
            <img src={health} alt="Your Health" className="my-8 mb-32 border-[5px] border-primary w-[250px] rounded-3xl" />
            <p className="font-semibold font-poppins mt-[-120px] text-2xl">Your Health</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform 0.5s">
            <img src={data} alt="Your Data" className="my-8 mb-32 border-[5px] border-primary w-[250px] rounded-3xl " />
            <p className="font-semibold font-poppins mt-[-120px] text-2xl">Your Data</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform 0.5s">
          <img src= {control} alt="profile pic" className="my-8 mb-32 border-[5px] border-primary w-[250px] rounded-3xl" />
            <p className="font-semibold font-poppins mt-[-120px] text-2xl">Your Control</p>
          </div>
        </div>
      </div>
      <div className="items-center text-center">
        <h1 className="px-16 py-5 mx-4 font-medium uppercase  border-[3px] text-transform: bg-inherit ml-02 my- font-poppins lg:mx-32 rounded-3xl border-primary">
          Welcome to <b>Care Cryption</b>,  <br />
          Your blockchain-based health record system. <br />
          Log in securely as a patient or doctor to access medical records.  <br />
          With advanced blockchain technology, your data is encrypted tamper-proof for utmost security.  <br />
          Take control of your health records with Care Cryption  <br />
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;

import Footer from "./Footer";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div className="body  lg:overflow-hidden lg:h-screen max-h-min flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="p-9">
        <div className="flex justify-center">
          <h1 className="ml-2">
            Welcome to Care Cryption, <br />
            Your blockchain-based health record system.<br />
            Log in securely as a patient or doctor to access medical records.<br />
            With advanced blockchain technology, your data is encrypted tamper-proof for utmost security.<br />
            Take control of your health records with Care Cryption
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;

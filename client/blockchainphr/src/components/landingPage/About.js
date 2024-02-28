import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles.css";

const About = () => {
  return (
    <div className="flex flex-col h-screen body lg:overflow-hidden lg:h-screen max-h-min">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default About;

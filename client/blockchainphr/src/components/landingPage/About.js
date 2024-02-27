import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles.css"
import name from "../../assets/img/dashboard/admin-user.png";
import email from "../../assets/img/dashboard/admin-email.png";
import admin_1 from "../../assets/img/dashboard/admin-1.jpg";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
import admin_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
const About = () => {
  return (
    <div className="flex flex-col h-screen body lg:overflow-hidden lg:h-screen max-h-min">
      <Navbar></Navbar>

      {
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
                  </div>}
      <Footer></Footer>
    </div>
  );
};

export default About;

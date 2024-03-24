import logo from "../../assets/img/landingPage/logo.png";
import dashboard from "../../assets/img/dashboard/dashboard.jpeg";
import reports from "../../assets/img/dashboard/report2_pbl.png";
import patient_history from "../../assets/img/dashboard/patient_history.jpeg";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import doctor2 from "../../assets/img/dashboard/doctor2.png";
import insurance from "../../assets/img/dashboard/insurance.png"; 
import logoutimg from "../../assets/img/dashboard/logout.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const PatientProfileSideBar = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    const res = await fetch("/logout");
    props.settoastCondition({
      status: "success",
      message: "Logged out Successfully!!!",
    });
    props.setToastShow(true);
    navigate("/");
  };
  const [Toggle, setToggle] = useState("Dashboard");

  return (
    <div className="grid w-screen h-screen grid-cols-12 overflow-y-hidden">
      <div className="col-span-2 shadow bg-green-50 side_bar">
        <div className="flex m-2 mt-4 ">
        <div className="pl-2 pr-5 mt-2 h-11 lg:h-10 lg:pr-3 filter grayscale">
        <img src={logo} className="w-[50px]" style={{ marginTop: '-15px' }} alt="logo" />
          </div>
          <div className="ml-0 text-xl font-bold cursor-default heading font-poppins">
              <h1>Care Cryption</h1>
          </div>
        </div>
        <nav>
          <Link
            to="/patient/dashboard"
            onClick={() => setToggle("Dashboard")}
            className={
              Toggle === "Dashboard" ? "text-gray-900" : "text-gray-400"
            }
          >
            <div className="flex m-2 mt-8 ">
              <div className="w-6 ml-4 ">
                <img src={dashboard} alt="dashboard"></img>
              </div>
              <div className="ml-4 font-bold font-poppins">
                <h1>Dashboard</h1>
              </div>
            </div>
          </Link>

          <Link
            to="/patient/reports"
            onClick={() => setToggle("Reports")}
            className={Toggle === "Reports" ? "text-gray-900" : "text-gray-400"}
          >
            <div className="flex m-2 mt-6 ">
              <div className="w-6 ml-4 ">
                <img src={reports} alt="reports"></img>
              </div>
              <div className="ml-4 font-bold font-poppins">
                <h1>Reports</h1>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <h1 className="mt-4 text-xl font-bold font-poppins">Health Records</h1>
            <div className="grid grid-rows-2 gap-4 mt-4 font-bold font-poppins">
            <Link
            to="/patient/insurance"
            onClick={() => setToggle("Insurance")}
            className={
              Toggle === "Insurance"
                ? "text-gray-900"
                : "text-gray-400"
            }
          >
            <div className="flex p-2">
            <img
              src={insurance}
              className="w-6"
              alt="profile"
            ></img>
            <h1 className="ml-4">Insurance </h1>
            </div>
            </Link>
              <Link
                to="/patient/history"
                onClick={() => setToggle("Patient_history")}
                className={
                  Toggle === "Patient_history"
                    ? "text-gray-900 "
                    : "text-gray-400"
                }
              >
                <div className="flex p-2">
                  <img
                    src={patient_history}
                    className="w-6"
                    alt="history"
                  ></img>
                  <h1 className="ml-4">Patient History</h1>
                </div>
              </Link>
              <Link
                to="/patient/profile"
                onClick={() => setToggle("Patient_profile")}
                className={
                  Toggle === "Patient_profile"
                    ? "text-gray-900"
                    : "text-gray-400"
                }
              >
                <div className="flex p-2">
                  <img
                    src={patient_profile}
                    className="w-6"
                    alt="profile"
                  ></img>
                  <h1 className="ml-4">Patient Profile</h1>
                </div>
              </Link>
              <Link
              to="/patient/doctor"
              onClick={() => setToggle("Available_doctor")}
              className={
                Toggle === "Available_doctor"
                  ? "text-gray-900"
                  : "text-gray-400"
              }
            >
              <div className="flex p-2">
              <img
                src={doctor2}
                className="w-6"
                alt="profile"
              ></img>
              <h1 className="ml-4">Available Doctors </h1>
              </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className="w-2/5 py-1 mx-auto mt-56 font-semibold rounded shadow-sm bg-primary font-poppins hover:bg-green-400">
          <button className="flex items-center font-bold" onClick={logout}>
            <img src={logoutimg} className="h-4 px-2 " alt="logout"></img>Log out
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default PatientProfileSideBar;

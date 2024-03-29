import logo from "../../assets/img/landingPage/logo.png";
import dashboard from "../../assets/img/dashboard/dashboard.jpeg";
import reports from "../../assets/img/dashboard/report2_pbl.png";
import patient_history from "../../assets/img/dashboard/patient_history.jpeg";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import logoutimg from "../../assets/img/dashboard/logout.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
const DashboardSidebar = (props) => {
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
      <div className="col-span-2 bg-white shadow side_bar">
        <div className="flex m-2 mt-4 ">
          <div className="pl-2 pr-5 mt-2 h-11 lg:h-10 lg:pr-3 filter grayscale">
          <img src={logo} className="w-[50px]" style={{ marginTop: '-15px' }} alt="logo" />
          </div>
          <div className="text-xl font-bold heading font-poppins ">
            <Link to="/">
              <h1>CareCryption</h1>
            </Link>
          </div>
        </div>
        <nav>
          <Link
            to="/doctor/dashboard"
            onClick={() => setToggle("Dashboard")}
            className={
              Toggle === "Dashboard" ? "text-gray-900" : "text-gray-400"
            }
          >
            <div className="flex m-2 mt-8 ">
              <div className="w-6 ml-4 ">
                <img src={dashboard} alt="dashbord"></img>
              </div>
              <div className="ml-4 font-bold font-poppins">
                <h1>Dashboard</h1>
              </div>
            </div>
          </Link>

          <Link
            to="/doctor/reports"
            onClick={() => setToggle("Reports")}
            className={Toggle === "Reports" ? "text-gray-900" : "text-gray-400"}
          >
            <div className="flex m-2 mt-6 ">
              <div className="w-6 ml-4 ">
                <img src={reports} alt="report"></img>
              </div>
              <div className="ml-4 font-bold font-poppins">
                <h1>Reports</h1>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <h1 className="mt-4 text-xl font-bold font-poppins">Main menu</h1>
            <div className="grid grid-rows-2 gap-4 mt-4 font-bold font-poppins">
              <Link
                to="/doctor/history"
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
                    alt="pat-history"
                  ></img>
                  <h1 className="ml-4">Patient History</h1>
                </div>
              </Link>
              <Link
                to="/doctor/profile"
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
                  <h1 className="ml-4">Doctor Profile</h1>
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

export default DashboardSidebar;

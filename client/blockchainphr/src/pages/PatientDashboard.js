import patient_profile from "../assets/img/dashboard/patient2_pbl.png";

import reports from "../assets/img/dashboard/report2_pbl.png";

import search from "../assets/img/dashboard/search2.png";
import Footer from "../components/landingPage/Footer";
import eye from "../assets/img/dashboard/eye.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PatientDashboard = (props) => {
  const navigate = useNavigate();

  const [dob, setDob] = useState("01/01/2006");
  const [patient, setPatient] = useState({
    name: {
      firstName: "",
      middleName: "",
      surName: "",
    },
    dob: "",
    mobile: "",
    email: "",
    adharCard: "",
    bloodGroup: "",
    address: {
      building: "",
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: "",
    },
    password: "",
    diseases: [{ disease: "", yrs: "" }],
    contactPerson: {
      name: {
        firstName: "",
        surName: "",
      },
      mobile: "",
      email: "",
      relation: "",
      address: {
        building: "",
        city: "",
        taluka: "",
        district: "",
        state: "",
        pincode: "",
      },
    },
  });
  const [prescriptions, setPrescriptions] = useState([{}]);

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    async function getpatient() {
      const res = await fetch("/getpatient");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      } else {
        setPatient(data.patient);
        if (data.patient.prescriptions) {
          setPrescriptions(data.patient.prescriptions.reverse());
        }
      }
    }
    getpatient();
  }, [dob]);

  return (
    <div className="h-screen col-span-10 full-body">
      <div className="body-without-footer max-h-min bg-bgprimary ">
        <div className=" main">
          <div className="">
            <div className="flex h-12 m-2 mt-4 rounded bg-bgprimary ">
              <div>
                <h1 className="p-2 text-2xl font-bold font-poppins ">
                  DashBoard Today
                </h1>
              </div>

              <div className="flex h-10 ml-20 ">
                <input
                  placeholder="Search"
                  className="pl-4 ml-4 text-xl border rounded w-96 focus:outline-none "
                ></input>
                <div className="pl-2 bg-white rounded ">
                  <img src={search} className="h-6 mt-2 " alt="search"></img>
                </div>
              </div>

              <Link to="/patient/profile">
                <button className="flex px-4 bg-white rounded shadow ml-60 h-14 ">
                  <img
                    src={patient_profile}
                    className="p-1 h-14 rounded-2xl"
                    alt="profile"
                  ></img>
                  <div className="mt-4 ml-4 font-bold font-poppins">
                    <h1>{`${patient.name.firstName}  ${patient.name.surName}`}</h1>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="p-4 m-4">
              <div>
                <h1 className="text-xl font-bold font-poppins ">
                  Patient Details
                </h1>
              </div>
              <div className="p-4 px-8 mt-4 bg-white shadow font-poppins rounded-xl">
                <div className="flex">
                  <div>
                    <h1>Name : </h1>
                  </div>
                  <div className="flex ml-2 ">
                    <h1 className="pl-1">{patient.name.firstName}</h1>
                    <h1 className="pl-1">{patient.name.middleName}</h1>
                    <h1 className="pl-1">{patient.name.surName}</h1>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h1>Date : </h1>
                  </div>
                  <div className="ml-2">
                    <h1>{convertDatetoString(patient.dob)}</h1>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h1>Blood group : </h1>
                  </div>
                  <div className="ml-2">
                    <h1>{patient.bloodGroup}</h1>
                  </div>
                </div>
                <div>
                  <h1 className="mt-4 font-bold">Past Health History</h1>
                  <div>{`${patient.diseases[0].disease} (${patient.diseases[0].yrs} yrs.)`}</div>
                </div>
              </div>
            </div>
            {/* recent health check up start */}
            <div className="p-4 m-4 ">
              <div>
                <h1 className="text-xl font-bold font-poppins ">
                  Recent Health Checkup
                </h1>
              </div>
              {prescriptions.length > 0 ? (
                <div className="p-4 px-8 mt-4 bg-white shadow font-poppins rounded-xl">
                  <div className="flex ">
                    <div>
                      <h1>Consultant Doctor :</h1>
                    </div>
                    <div className="ml-2">
                      <h1>{`Dr. ${prescriptions[0].doctor}`}</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <h1>Date :</h1>
                    </div>
                    <div className="ml-2">
                      <h1>{convertDatetoString(prescriptions[0].createdAt)}</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <h1>Diagnosis : </h1>
                    </div>
                    <div className="ml-2">
                      <h1>{prescriptions[0].diagnosis}</h1>
                    </div>
                  </div>
                  <Link
                    to="/patient/prescription"
                    onClick={() => {
                      props.setPrescriptionID(prescriptions[0]._id);
                    }}
                  >
                    <div className="flex items-center w-5/12 px-2 py-1 mt-2 text-base font-semibold rounded shadow-sm justify-evenly bg-primary font-poppins hover:bg-bgsecondary">
                      <img src={reports} className="h-4" alt="report"></img>

                      <button className="pl-1 font-semibold ">
                        Preview Prescription
                      </button>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="flex justify-center p-4 px-8 mt-4 font-bold bg-white shadow font-poppins rounded-xl">
                  {" "}
                  No Data Found...{" "}
                </div>
              )}
            </div>
            {/* recent health check up end */}
            <div></div>
          </div>

          <div className="m-4 font-poppins ">
            <div className="flex justify-between m-8">
              <div className="ml-4 text-xl font-bold">
                <h1>Patient Dashboard</h1>
              </div>
            </div>
            <div className="m-4 bg-white rounded-lg ">
              <div className="grid grid-rows-2 gap-2 p-6 shadow">
                <div className="grid grid-cols-4 font-bold ">
                  <div>
                    <h1>Date</h1>
                  </div>
                  <div>
                    <h1>Doctor Name</h1>
                  </div>
                  <div>
                    <h1>Diagnosis</h1>
                  </div>
                  <div>
                    <h1>Prescription</h1>
                  </div>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                </div>

                {prescriptions.length > 1 ? (
                  prescriptions.slice(1, 3).map((prescription) => {
                    return (
                      <div className="grid grid-cols-4">
                        <div>
                          <h1>{convertDatetoString(prescription.createdAt)}</h1>
                        </div>
                        <div className="flex">
                          <h1>Dr. </h1>
                          <h1>{prescription.doctor}</h1>
                        </div>
                        <div>
                          <h1>{prescription.diagnosis}</h1>
                        </div>
                        <Link
                          to="/patient/prescription"
                          onClick={() =>
                            props.setPrescriptionID(prescription._id)
                          }
                        >
                          <div className="flex justify-center w-2/5 px-3 py-1 font-semibold rounded shadow-sm bg-primary font-poppins hover:bg-bgsecondary">
                            <img
                              src={eye}
                              className="h-4 my-auto"
                              alt="preview"
                            ></img>
                            <button className="ml-2 font-bold">Preview </button>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div className="mx-auto mt-3 mb-5">No Records Found...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-0">
        <Footer></Footer>
      </div>
    </div>
    
  );
  
};


export default PatientDashboard;

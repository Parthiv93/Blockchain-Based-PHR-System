import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import PatientReportCompo from "./PatientReportCompo";
import Footer from "../landingPage/Footer";

const Insurance = (props) => {
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
  const [prescriptions, setPrescriptions] = useState([]);
  const [policyNumber, setPolicyNumber] = useState("");
  const [company, setCompany] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

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
        setDob(convertDatetoString(patient.dob));
      }
    }
    getpatient();
  }, [dob]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create new prescription object with form data
    const newPrescription = {
      policyNumber,
      company,
      expiryDate,
    };
    // Update prescriptions state with new prescription
    setPrescriptions([...prescriptions, newPrescription]);
    // Clear form fields
    setPolicyNumber("");
    setCompany("");
    setExpiryDate("");
  };

  return (
    <div className="col-span-10">
      <div className="px-12 ">
        <div className="h-screen">
          <div className="font-poppins mainf">
            <Link to="/patient/profile">
              <div className="flex w-1/5 px-4 mt-8 ml-auto mr-8 bg-white rounded shadow h-14">
                <img
                  src={patient_profile}
                  className="w-12 p-1 rounded-2xl"
                  alt="profile"
                ></img>
                <div className="grid grid-rows-1 gap-2 mb-3">
                  <div className="mt-4 ml-4 font-bold font-poppins">
                    <h1 className="ml-2">
                      {`${patient.name.firstName} ${patient.name.surName}`}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex justify-between m-8">
              <div className="ml-4 text-xl font-bold">
                <h1>Insurance</h1>
              </div>
            </div>
            <div className="m-4 bg-white rounded-lg">
              <div className="grid grid-rows-2 gap-2 p-6 shadow">
                <div className="grid grid-cols-4 font-bold">
                  <div>
                    <h1>Policy Number</h1>
                  </div>
                  <div>
                    <h1>Company</h1>
                  </div>
                  <div>
                    <h1>Expiry Date</h1>
                  </div>
                  <div>
                    <h1>Actions</h1>
                  </div>
                </div>
                {prescriptions.length > 0 ? (
                  prescriptions.map((prescription, index) => (
                    <PatientReportCompo
                      key={index}
                      prescription={prescription}
                      setPrescriptionID={props.setPrescriptionID}
                    />
                  ))
                ) : (
                  <div className="mx-auto mt-3 font-bold">
                    No Record Found...
                  </div>
                )}
              </div>
            </div>
            {/* Form to add insurance details */}
            <div className="m-4 bg-white rounded-lg">
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-3 gap-4 p-6 shadow">
                  <div>
                    <label htmlFor="policyNumber">Policy Number:</label>
                    <input
                      type="text"
                      id="policyNumber"
                      value={policyNumber}
                      onChange={(e) => setPolicyNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="company">Company:</label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                      type="date"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <button type="submit">Add Insurance</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-0 -mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Insurance;

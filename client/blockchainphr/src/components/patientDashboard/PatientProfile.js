import Footer from "../landingPage/Footer";
import patient_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
import name from "../../assets/img/dashboard/patient-profile-name.png";
import birth from "../../assets/img/dashboard/patient-profile-birth.png";
import address from "../../assets/img/dashboard/patient-profile-address.png";
import phone from "../../assets/img/dashboard/patient-profile-phone.png";
import mail from "../../assets/img/dashboard/patient-profile-mail.png";
import blood from "../../assets/img/dashboard/patient-profile-blood.png";
import healthid from "../../assets/img/dashboard/patient-profile-healthid.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PatientProfile = (props) => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    healthID: "",
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
      }
    }
    getpatient();
  }, []);

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <body className="h-screen col-span-10 overflow-y-scroll font-poppins ">
      <div className="grid grid-cols-2 mt-16">
        <div className="w-2/3 p-4 m-8 mx-auto bg-white rounded-md shadow-md ">
          <div className="flex justify-center">
            <img
              src={patient_card_profile}
              className="w-40 h-40 p-4 border-2 rounded-full "
              alt="patient-profile"
            />
          </div>
          <div className="mt-6">
            <div className="flex ml-8 ">
              <img src={name} className="w-8 h-8 " />
              <div className="flex mt-1">
                <h2 className="ml-2">{patient.name.firstName}</h2>
                <h2 className="ml-2">{patient.name.middleName}</h2>
                <h2 className="ml-2">{patient.name.surName}</h2>
              </div>
            </div>
            <div className="flex mt-4 ml-8">
              <img src={birth} className="w-5 h-5 ml-1" />
              <h2 className="ml-4">{convertDatetoString(patient.dob)}</h2>
            </div>
            <div className="flex mt-4 ml-8">
              <img src={blood} className="w-6 h-6" />
              <h2 className="ml-4">{patient.bloodGroup}</h2>
            </div>
            <div className="flex mt-4 ml-8">
              <img src={phone} className="w-6 h-6 " />
              <h2 className="ml-4">+91</h2>
              <h2 className="ml-2">{patient.mobile}</h2>
            </div>
            <div className="flex mt-4 ml-8">
              <img src={mail} className="w-5 h-6 " />
              <h2 className="ml-4 ">{patient.email}</h2>
            </div>
            <div className="flex mt-4 ml-8">
              <img src={healthid} className="w-5 h-6 " />
              <h2 className="ml-4">{patient.healthID}</h2>
            </div>
          </div>
        </div>
        <div className="my-2">
          <div className="w-2/3 p-8 m-2 bg-white rounded-md shadow-md">
            <div className="flex mt-3">
              <img src={address} className="w-8 h-7" />
              <div className="ml-4">
                <h2>
                  {" "}
                  {`${patient.address.building},  ${patient.address.city},  ${patient.address.taluka},  ${patient.address.district},  ${patient.address.state},  ${patient.address.pincode}`}
                </h2>
              </div>
            </div>
          </div>
          <div className="w-2/3 p-8 m-2 mt-10 bg-white rounded-md shadow-md">
            <h1 className="flex justify-center text-xl font-bold">
              Emergency Contact Details
            </h1>
            <div className="flex mt-4 ">
              <img src={name} className="w-8 h-8" />
              <h1 className="mx-2"> {patient.contactPerson.name.firstName}</h1>
              <h1 className="mx-2">{patient.contactPerson.name.surName}</h1>
            </div>

            <div className="flex mt-3">
              <img src={phone} className="w-6 h-6 " />
              <h1 className="ml-2 ">+91-</h1>
              <h1 className="mx-2">{patient.contactPerson.mobile}</h1>
            </div>
            <div className="flex mt-3">
              <img src={mail} className="w-5 h-6 " />

              <h1 className="mx-4">{patient.contactPerson.email}</h1>
            </div>

            <div className="flex mt-6">
              <img src={address} className="w-8 h-7" />
              <div className="ml-4">
                <h2>
                  {" "}
                  {`${patient.contactPerson.address.building},  ${patient.contactPerson.address.city},  ${patient.contactPerson.address.taluka},  ${patient.contactPerson.address.district},  ${patient.contactPerson.address.state},  ${patient.contactPerson.address.pincode}`}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default PatientProfile;

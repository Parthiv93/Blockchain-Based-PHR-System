import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

const Contact = (props) => {
  const form = useRef();
  const [Loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      "service_ytpdnfv",
      "template_sel0xjo",
      form.current,
      "Qc4IEdSfGeohecLaR"
    );
    e.target.reset();
    setLoading(false);
    props.settoastCondition({
      status: "success",
      message: "Message Sent Successfully!!!",
    });
    props.setToastShow(true);
  };

  return (
    <div className="w-full body ">
      <Navbar></Navbar>

      <div className="bg-secoundry ">
        <div className="">
          <div>
            <div className="flex justify-center mt-4">
              <h1 className="p-4 px-8 text-3xl font-bold rounded  font-poppins">
                Contact us
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-4 lg:grid lg:grid-cols-2 ">
          <div>
            <div className="max-w-full px-16 py-8 mx-4 my-8 bg-white border-8 lg:mx-32 rounded-3xl border-primary">
              <div className="flex justify-center">
                <h1 className="px-4 text-3xl font-bold rounded  font-poppins">
                  Reach us
                </h1>
              </div>
              <div className="">
                <h1 className="mt-4 text-2xl font-bold font-poppins ">
                  Email :
                </h1>
                <h1 className="text-xl font-poppins">projectk324@gmail.com</h1>
              </div>
              <div>
                <h1 className="mt-4 text-2xl font-bold font-poppins ">
                  Address :
                </h1>
                <h2 className="text-xl font-poppins">
                  Ernakulam{" "}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <div className="p-10 m-4 mt-12 mb-8 bg-white rounded shadow-lg lg:mr-12">
              <form className="grid gap-8 " ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-4 ">
                  <label className="col-span-1 font-bold font-poppins lg:text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    className="col-span-3 py-2 pl-8 text-lg bg-blue-100 rounded outline-none"
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="col-span-1 font-bold font-poppins lg:text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="col-span-3 py-2 pl-8 text-lg bg-blue-100 rounded outline-none"
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="col-span-1 font-bold font-poppins lg:text-xl">
                    Message{" "}
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="25"
                    name="message"
                    className="col-span-3 py-2 pl-4 text-lg bg-blue-100 rounded outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  {Loading ? (
                    <ReactLoading
                      type={"bubbles"}
                      color={""}
                      height={"9%"}
                      width={"9%"}
                    />
                  ) : (
                    <button className="px-3 py-1 mt-2 text-lg font-semibold rounded shadow-sm bg-primary font-poppins hover:bg-green-500">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="relative bottom-0 mt-auto">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;

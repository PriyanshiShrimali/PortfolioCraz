import React from "react";
import "./Contact.css";
import contactImg from "./img/piyu.jpg";

//import { ToastContainer, toast } from 'react-toastify';
function Contact() {
  //const notify = () => toast("Wow so easy!");

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
      <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Us.</h1>
              <p className="hire__text white">
                I am available for freelance work. connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+1234567890</strong>or email
                <strong> priyanshishrimali2001@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your Name *"
                required="required"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
                required="required"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
                required="required"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your Message"
                required="required"
              ></textarea>

              <button
                onClick={() => alert("Submited")}
                className="btn contact pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

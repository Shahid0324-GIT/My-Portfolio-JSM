/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

import { images } from "../../constants";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:moshahid0324@gmail.com" className="p-text">
            Connect with me via E-Mail
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+91 9346388036" className="p-text">
            Connect with me via Phone
          </a>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                name="email"
                placeholder="Your E-Mail"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank You for getting in touch!</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrapper, MotionWrapper } from "../../wrapper";
import { urlFor, client } from "../../client";
// import { images } from "../../constants";
import "./About.scss";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good Web Developer.",
//     imgUrl: images.about01,
//   },
//   {
//     title: "MERN Stack Development",
//     description: "I am a good FullStack Developer.",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am a good Frontend Developer.",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Backend Development",
//     description: "I am a good Backend Developer.",
//     imgUrl: images.about04,
//   },
// ];

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Design</span> Means
        <br />
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                style={{ objectFit: "cover" }}
              />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "app__whitebg"
);

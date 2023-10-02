import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrapper, MotionWrapper } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

// eslint-disable-next-line react-refresh/only-export-components
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const expQuery = "*[_type == 'experiences']";

    const skillsQuery = "*[_type == 'skills']";
    client.fetch(skillsQuery).then((data) => {
      // console.log(data);
      setSkills(data);
    });

    client.fetch(expQuery).then((data) => {
      // console.log(data);
      setExperience(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Tech Tools</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => {
            return (
              <motion.div
                key={skill.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience, index) => {
            return (
              <motion.div
                className="app__skills-exp-item"
                key={`experience.year ${index}`}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>

                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => {
                    return (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tooltip-content={work.desc}
                          data-tooltip-id={work.name}
                          key={`work.name ${index}`}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        <Tooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        />
                      </>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrapper(
  MotionWrapper(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);

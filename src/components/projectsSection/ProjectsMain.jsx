import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import image4 from"../../images/port.png";
import image5 from "../../images/piz.png";
import image6 from "../../images/quiz.png";
import image1 from "../../images/job.png";
import image2 from "../../images/WeatherApp_SS.png";
import image3 from "../../images/codderscafe_ss.png";

const projects = [
  {
    name: "Job_Board",
    year: "march 2025",
    align: "left",
    image: image1,
    link: "https://github.com/dhavalshahh/Job_Hunt.git",
  },
  {
    name: "Weather_App",
    year: "march 2025",
    align: "right",
    image: image2,
    link: "https://dhavalshahh.github.io/Weather_App/",
  },
  {
    name: "Codders-Cafe",
    year: "march 2025",
    align: "left",
    image: image3,
    link: "https://dhavalshahh.github.io/Codders-Cafe/",
  },
  {
    name: "Portfolio_1 ",
    year: "July2024",
    align: "right",
    image: image4,
    link: "https://dhavalshahh.github.io/codsoft_task1/",
  },
  {
    name: "Pizzlo (Pizza Website)",
    year: "July 2024",
    align: "left",
    image: image5,
    link: "https://dhavalshahh.github.io/codsoft_task2/",
  },
  {
    name: "A Quiz platform",
    year: "July 2024",
    align: "rightt",
    image: image6,
    link: "https://dhavalshahh.github.io/codsoft_task5/",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-8 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
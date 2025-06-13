import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Portfolio_1 ",
    year: "July2024",
    align: "right",
    image: "/images/port.png",
    link: "https://dhavalshahh.github.io/codsoft_task1/",
  },
  {
    name: "Pizzlo (Pizza Website)",
    year: "July 2024",
    align: "left",
    image: "/images/piz.png",
    // link: "#",
    link: "https://dhavalshahh.github.io/codsoft_task2/",
  },
  {
    name: "A Quiz platform",
    year: "July 2024",
    align: "right",
    image: "/images/quiz.png",
    link: "https://dhavalshahh.github.io/codsoft_task5/",
  },
  {
    name: "Job_Board",
    year: "march 2025",
    align: "left",
    image: "/images/job.png",
    link: "https://github.com/dhavalshahh/Job_Hunt.git",
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
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
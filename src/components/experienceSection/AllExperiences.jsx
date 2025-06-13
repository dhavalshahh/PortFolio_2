import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: " Web Development",
    company: "CodSoft",
    date: " 15/06/2024 to 15/07/2024.",
    responsibilities: [
      "Creating a Calculator ",
      "I have created a Landing Page",
      "I have also created a Job_board. ",
      "I have also created a Portfolio.",
      "and lastly i have created a Online uiz Maker.",
    ],
  },
  {
    job: "CodeSoft",
    company: "C++",
    date: "",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "AWS",
    company: "Amazon Web Services (AWS) – Cloud Experience",
    date: "",
    responsibilities: [
        
      "Deployed and managed scalable applications using EC2, S3, and RDS",
      "Set up CI/CD pipelines using CodePipeline, CodeBuild, and integrated with GitHub etc.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-[#fb9718] lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full items-center gap-8 
        ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} 
        flex-col`}
    >

      <div className="max-h-[220px] max-w-[400px] w-full rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 ralative border border-white">
        <div className=""></div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="website image" className="w-full h-full object-cover" />
        </a>
      </div>


      <div className={`flex flex-col w-full px-4 sm:px-0 
        ${align === "left" ? "md:items-start" : "md:items-end"} 
        items-center text-center md:text-left`}>
        
        <h2 className="md:text-3xl sm:text-2xl text-[#fb9718] mb-1">{name}</h2>
        <h3 
          className="text-lg font-thin text-white font-special mb-1"
        >
          {year}
        </h3>
        
        <a
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg flex gap-2 items-center text-[#15d1e9] hover:text-[#fb9718] transition-all duration-500 cursor-pointer"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

    </motion.div>
  );
};

export default SingleProject;
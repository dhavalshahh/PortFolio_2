import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { LuRectangleVertical } from "react-icons/lu";
import image from "../../images/me.jpg";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src={image}
        alt="Dhaval Shah"
        className="max-h-[400px] w-auto rounded-[100px] relative overflow-hidden"
      />
      
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <LuRectangleVertical  className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#15d1e9] blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
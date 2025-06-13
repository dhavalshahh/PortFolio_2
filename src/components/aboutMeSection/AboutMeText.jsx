import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-[#15d1e9] mb-10">About Me</h2>
      <p>
        I am a passionate Software Devloper dedicated about transforming ideas
        into functional code. Currently enrolled in 4rth year at Medi-caps
        University, Indore, my journey involves unravelling the mysteries of
        programming languages, problem-solving, and crafting digital solutions.
        Proficient in languages like C C++ and Python, I approach coding as both
        a skill and an art. I am eager to contribute my growing expertise to
        meaningful projects and constantly explore new ways to enhance my coding
        prowess.
      </p>
      <button className="border border-[#fb9718] rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-[#fb9718] transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-[#15d1e9] transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

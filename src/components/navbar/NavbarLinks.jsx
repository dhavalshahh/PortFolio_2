import { Link    } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className={`flex flex-col sm:flex-row items-center sm:gap-6 gap-4 
              text-white font-body text-sm sm:text-base lg:text-lg 
              sm:static absolute top-full left-1/2 sm:left-0 
              transform sm:transform-none -translate-x-1/2 
              sm:bg-transparent bg-black/50 backdrop-blur-md sm:rounded-none rounded-xl 
              shadow-md sm:shadow-none w-[90%] sm:w-auto py-4 sm:py-0 
              z-50 transition-all duration-300 ease-in-out`}>
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-[#15d1e9] transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-[#15d1e9] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
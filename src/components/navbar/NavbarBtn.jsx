import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-[#15d1e9] border flex items-center gap-1 bg-gradient-to-r  from-[#009fb3] to-[#fb9718] transition-all duration-500 hover:scale-110 hover:border-[#fb9718] cursor-pointer hover:[box-shadow:0_0_20px_rgba(94,206,220,0.5)]">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[#1e1917] items-center px-4 py-2 sm:px-6 sm:py-4 rounded-r-full rounded-l-full border-[#fb9718] border-[0.5px] h-[60px] sm:h-auto">

        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-3 sm:p-5 bg-black items-center justify-center rounded-full border-[#fb9718] border-[0.5px]">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;

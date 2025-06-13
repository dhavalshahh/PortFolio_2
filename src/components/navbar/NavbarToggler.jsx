import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="text-2xl p-3 border border-[#fb9718] rounded-full text-[#fb9718] hover:bg-[#fb9718] hover:text-white transition-all duration-500 cursor-pointer"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
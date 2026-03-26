import NavbarLeft from "./navbar-left";
import NavbarRight from "./navbar-right";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5 px-2 md:px-0">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;

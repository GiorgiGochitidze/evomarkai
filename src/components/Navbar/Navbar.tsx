import { VscAccount } from "react-icons/vsc";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <VscAccount size={25} className="account-icon" fill="white" />
      </nav>
    </header>
  );
};

export default Navbar;

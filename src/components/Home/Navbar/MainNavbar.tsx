import Link from "next/link";
import "./CSS/MainNavbar.css";
import { LinkStyles } from "@/components/LinkStyles";

const MainNavbar = () => {
  return (
    <header>
      <nav>
        <Link style={LinkStyles} href="/">
          <p>Home</p>
        </Link>
        <p>About Us</p>
        <Link style={LinkStyles} href="/signIn">
          <p>Sign In</p>
        </Link>
        <Link style={LinkStyles} href="/signUp">
          <p>Sign Up</p>
        </Link>
      </nav>
    </header>
  );
};

export default MainNavbar;

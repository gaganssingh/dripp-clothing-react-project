import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.styles.scss";

export default function Header() {
  return (
    <div className="header">
      {/* LOGO */}
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      {/* OPTIONS */}
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
}

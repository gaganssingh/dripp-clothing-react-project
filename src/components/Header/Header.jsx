import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./Header.styles.scss";

export default function Header(props) {
  const { currentUser } = props;

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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

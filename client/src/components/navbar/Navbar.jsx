import { useContext, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [setOpenModal] = useState(true);

  const handleClick = () => {
    if (user) {
      navigate("/login");
    } else {
      navigate("/login");
    }
    // navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            <h1>Hotelbooking</h1>
          </span>
        </Link>
        {user ? user.username:
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={handleClick} className="navButton">
              Login
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;

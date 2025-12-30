import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.SF6qMJRnUek_EmMaLSwSOwHaEc?w=297&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to = "/about">About Us</Link>
          </li>
          <li>
            <Link to = "/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

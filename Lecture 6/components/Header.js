import { useState } from "react";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // How the value of btnName which is constant is being changed so the reason is written in the notes section of this folder
  

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
          <li>About Us</li>
          <li>Contact Us</li>
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

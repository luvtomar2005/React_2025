import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.SF6qMJRnUek_EmMaLSwSOwHaEc"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>

          <li className="font-bold px-4">{loggedInUser}</li>

          <button
            onClick={() =>
              setBtnName(btnName === "Login" ? "Logout" : "Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

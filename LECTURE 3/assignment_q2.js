import React from "react";
import ReactDOM from "react-dom/client";

// Logo Component
const LogoSection = () => {
  return (
    <div className="logo-container">
      <img
        className="logo-image"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="app-logo"
      />
    </div>
  );
};

// Search Bar Component
const SearchBarSection = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search something..."
      />
    </div>
  );
};

// User Icon Component
const UserProfileSection = () => {
  return (
    <div className="user-profile-container">
      <img
        className="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user-icon"
      />
    </div>
  );
};

// Combined Header Component
const HeaderComponent = () => {
  return (
    <header className="header-container">
      <LogoSection />
      <SearchBarSection />
      <UserProfileSection />
    </header>
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

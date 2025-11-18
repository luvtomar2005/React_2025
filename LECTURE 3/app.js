import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement example
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello How are you"
);

console.log(heading);

// JSX example
const jsxHeading = <h1 id="title">Hello React using JSX</h1>;

// Another JSX element
const heading1 = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// Functional Component (Correct way)
const Title = () => {
  return (
    <h1 id="title" key="title">
      Namaste React
    </h1>
  );
};

// Another functional component
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      {heading1}
      {jsxHeading}
    </div>
  );
};

// Create root ONE TIME only
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

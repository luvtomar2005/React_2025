import React from "react";
import ReactDOM from "react-dom/client";

// Creating the element WITHOUT JSX
const nestedHeaderElement = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", { key: "main-heading" }, "This is the main heading"),
    React.createElement("h2", { key: "sub-heading" }, "This is the sub-heading"),
    React.createElement("h3", { key: "tagline" }, "This is the tagline"),
  ]
);

// Creating the SAME element using JSX
const nestedHeaderJsx = (
  <div className="title">
    <h1>This is the main heading</h1>
    <h2>This is the sub heading</h2>
    <h3>This is the tagline</h3>
  </div>
);

// Small components for composition
const MainHeading = () => <h1>This is the main heading</h1>;
const SubHeading = () => <h2>This is the sub heading</h2>;
const Tagline = () => <h3>This is the tagline</h3>;

// FINAL component using composition
const NestedHeaderSection = () => {
  return (
    <div className="title">
      <MainHeading />
      <SubHeading />
      <Tagline />
    </div>
  );
};

// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeaderSection />);

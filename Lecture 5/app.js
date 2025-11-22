/*
Let us clean the code by keeeping the components inside the seperate
component folders and api in the seperate api folder but keep  in mind 
to avoid too much nesting 

Here we have take the usage of our last project and tried to clean that code


*/


// In this project we are just going to make our food cart app
import React from "react";
import ReactDOM from "react-dom/client";
import Body  from "./components/Body";
import { Header } from "./components/Header";
/*
Body of the app
1. Header
  ** Logo
  ** Nav Items
2. Body 
  ** serach container
  ** restaurant container
  ** Restaurant card

3. Footer
 ** Copyright
 ** Links 
 ** Address
 ** contact
*/






// Creating the app layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

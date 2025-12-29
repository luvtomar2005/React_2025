// IN this section we will create routing component for our app
// Configuration is basically information which tells what happens at specific path 

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import {Header} from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// Creating routing configuration by importing the routing library first

import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

// Imported the outlet component

// router provider provides our router to our app
// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// // Routing configuration (flat, like lecture)
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />, // basically calling the home page

//     errorElement : <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />, // Calling the about page 
//   },
//   {
//     path : "/contact",
//     element : <Contact /> // calling the contact page 
//   }
// ]);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

// Now we will use the childrent routing in our app
// so basically we dont want our code to have header whenever we go to new websiete that is hwo the real website works
const AppLayout = () => {
  return(
    <div className = "app">
      <Header />
      <Outlet />
      {/* So whenever our path will be changed our children router will fill the outlet according to the change path
      basically we are not seeing any html in the outlet instead this outlet is replaced by the children configuration */}
    </div>
  );

};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />,
      },
      {
        path : "/about",
        element : <About  />,

      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurant/:resId",
        // by using (:) we can go to whichever id we want and this id the particular id of the restaurant which data we or dynamic data we are loading
        element : <RestaurantMenu />,
      },
    ],

    errorElement : "Error",
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
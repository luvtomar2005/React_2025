import React from "react";
import { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import {Header} from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import "./index.css";



// doing the lazy loading the for the grocery component
const Grocery = lazy(() => import("./components/Grocery"));
// This import a callback function which will give us the grocery page when needed
const AppLayout = () => {
  return(
    <div className = "app">
      <Header />
      <Outlet />
     
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
        path : "/grocery",
        element : <Suspense fallback ={<h1>Loading!!!</h1>}><Grocery /></Suspense>
      },
      {
        path : "/restaurant/:resId",
        
        element : <RestaurantMenu />,
      },
    ],

    errorElement : "Error",
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
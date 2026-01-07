import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Body from "./components/Body";
import { Header } from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

import "./index.css";

// Lazy loading Grocery
const Grocery = lazy(() => import("./components/Grocery"));

/* =======================
   App Layout
======================= */
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState("");

  // Authentication logic (runs once)
  useEffect(() => {
    const data = {
      name: "Luv Tomar",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
       {/* Now any component can:

read loggedInUser

update it using setUserInfo */}
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

/* =======================
   Router Configuration
======================= */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

/* =======================
   Render
======================= */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



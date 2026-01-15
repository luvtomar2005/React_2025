// import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!resId) return;
//     fetchData();
//   }, [resId]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://corsproxy.io/?" +
//           encodeURIComponent(
//             MENU_API +
//               `&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&submitAction=ENTER`
//           )
//       );

//       if (!response.ok) {
//         setError(true);
//         return;
//       }

//       const json = await response.json();
//       setResInfo(json.data);
//     } catch (err) {
//       console.error("Menu fetch failed", err);
//       setError(true);
//     }
//   };

//   return { resInfo, error };
// };

// export default useRestaurantMenu;

import { useEffect, useState } from "react";
import mockMenu from "./MockMenu";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(mockMenu);
  }, []);

  return { resInfo };
};

export default useRestaurantMenu;

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const SWIGGY_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=55473&submitAction=ENTER";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?" + encodeURIComponent(SWIGGY_URL)
      );

      if (!response.ok) {
        console.warn("Blocked by Swiggy / Proxy:", response.status);
        setError(true);
        return;
      }

      const text = await response.text();

      // If Swiggy sends HTML, JSON.parse will fail
      const json = JSON.parse(text);

      if (!json?.data) {
        console.warn("Invalid API structure");
        setError(true);
        return;
      }

      setResInfo(json.data);
    } catch (err) {
      console.error("Menu fetch failed:", err);
      setError(true);
    }
  };

  // 🔹 loading
  if (resInfo === null && !error) return <Shimmer />;

  // 🔹 error fallback (IMPORTANT)
  if (error) {
    return (
      <div>
        <h1>Unable to load menu</h1>
        <p>Swiggy API blocked this request.</p>
        <p>Refresh or try later.</p>
      </div>
    );
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{costForTwoMessage}</h4>

      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Gravy Momos</li>
        <li>Honey Chilli Potato</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

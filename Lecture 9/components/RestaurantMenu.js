// Now this is slight different from the previous one restaurant card menu because we have removed the changing 
// the fetching logic of api data and put it to our custom hook which is useRestaurantCard
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  console.log("RestaurantMenu rendered");

  const { resId } = useParams();
  console.log("resId from URL:", resId);

  const { resInfo, error } = useRestaurantMenu(resId);

  if (error) return <h1>Error loading menu</h1>;
  if (!resInfo) return <h1>Loading menu...</h1>;

  return (
    <div>
      <h1>Restaurant Menu Page</h1>
      <h2>Restaurant ID: {resId}</h2>
      <h3>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h3>
    </div>
  );
};

export default RestaurantMenu;

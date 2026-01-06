import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, error } = useRestaurantMenu(resId);
 // Now we will write something like whenever the index of the card changes the functino of showing accordion will be shown...
  const {showIndex , setShowIndex} = useState(0);
  
// But here is a thing we can not modify showIndex(which is in parent) from RestaurantCategory . Indirectly we can do that
  if (error) return <h1>Error loading menu</h1>;
  if (!resInfo) return <h1>Loading menu...</h1>;

  // 🔹 Restaurant Info
  const restaurantCard = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  );

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

  // 🔹 Menu Categories
  const menuCards =
    resInfo?.cards
      ?.find((c) => c?.card?.card?.groupedCard)
      ?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = menuCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems = {index === 1 ? true : false} // this means only true for first card means only one card will be open of accordion
          // now for dynamically changing the index from the children 
          showIndex = {() => setShowIndex(index)}
          // so set show index will call the different index everytime.. this is how our accordion will change it's behaviour.
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;


/* this is the lifting state up we learn about in this section which is an advance concept 
and this is very important interview question.. */
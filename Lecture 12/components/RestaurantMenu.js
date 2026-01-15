// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const { resInfo, error } = useRestaurantMenu(resId);
//   const [showIndex, setShowIndex] = useState(null);

//   if (error) return <h1>Error loading menu</h1>;
//   if (!resInfo) return <h1>Loading menu...</h1>;

//   const restaurantCard = resInfo?.cards?.find(
//     (c) => c?.card?.card?.info
//   );

//   const { name, cuisines, costForTwoMessage } =
//     restaurantCard?.card?.card?.info || {};

//   const menuCards =
//     resInfo?.cards
//       ?.find((c) => c?.card?.card?.groupedCard)
//       ?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const categories = menuCards.filter(
//     (c) =>
//       c?.card?.card?.["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );

//   return (
//     <div>
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold text-lg">
//         {cuisines?.join(", ")} - {costForTwoMessage}
//       </p>

//       {categories.map((category, index) => (
//         <RestaurantCategory
//           key={category.card.card.title}
//           data={category.card.card}
//           showItems={showIndex === index}
//           setShowIndex={() =>
//             setShowIndex(showIndex === index ? null : index)
//           }
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
// The above data was the old way i was using the code and now this is teh correct one 
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // ✅ CORRECT: destructuring the returned object
  const { resInfo } = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <h1>Loading...</h1>;

  const restaurantCard = resInfo.cards.find(
    (c) => c.card?.card?.info
  );

  const { name, cuisines, costForTwoMessage } =
    restaurantCard.card.card.info;

  const menuCards =
    resInfo.cards
      .find((c) => c.card?.card?.groupedCard)
      ?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = menuCards.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} – {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={showIndex === index}
          setShowIndex={() =>
            setShowIndex(
              showIndex === index ? null : index
            )
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;


import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems }) => {
  /* Now what does this showItems make is now these accordiance data will be depened on parents
  which is restaurantMenu 
  */
  // const [showItems, setShowItems] = useState(false);

//   const handleClick = () => {
//     setShowItems(!showItems);
//   };
    // We remove the above state because we dont want the children or category to manage
    //  itself so now it will become the controlled component...

  return (
    <div>
      {/* Category Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Category Items */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;


/* Inteviewer can ask this very important question...
 suppsose we want to build when we click any category the other category collapse(close themselves)
 but it is very hard to do this because each of the category managing their own state
 so instead of giving permission or allowing the power to manage itself to a category
 we can give this power the parent to manage the categories

*/
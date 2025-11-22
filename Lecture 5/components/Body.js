import { useState } from "react";
import RestaurantCard from "./RestaurantCards";
import { restaurantList } from "../utils/constants";
// always keep in mind at the end of the day react functional component is the only javascript function
// and the react element is at the end of the day is the plane  javascript object
// React hook is the normal javascript function which is given by react

const Body = () => {
    // Using the local state variable  -> super powerful variable
    const [listOfRestaurants , setListRestaurants] = useState(restaurantList)
    // IN react documentation this ui changed is defined as whenver a state variable is updates react re renders its components
  // Normal JS variable (NOT state)

    // let listOfRestaurants = []
 


  return (
    <div className="body">

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // NORMAL FILTER — like Akshay
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setListRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.uuid}
            resData={restaurant}
          />
        ))}
      </div>

    </div>
  );
};

export default Body;

// Using the local state variable  -> super powerful variable

// Now as we will be using second approach so we will go use the second react hook which is useeffect

// the syntax of use effect is as followed it contains a callback function which will be printed after our page renders
// so this will help us using the second approach where we try to fetch our data first 

// Now we have fetched the api so now we will updates the listofRestaurant part 
// So react will re-render the data and the data will be shown to us..

import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCards";

const Body = () => {

  // 🔑 Akshay-style fix: two states
  const [allRestaurants, setAllRestaurants] = useState([]);     // original data
  const [restaurants, setRestaurants] = useState([]);           // filtered data

  const [loading, setLoading] = useState(true);

  // Creating local state variable for our search button
  const [searchText, setSearchText] = useState("");
  // Whenever state variable updates react re-renders the whole page means who page re renders 
  // for example if you cafe -> page will be re render 4 times

  // why we used the usestate for search text is written in notes file

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await res.json();

      // 🔑 Find the card that actually contains restaurant data
      const restaurantList =
        json?.data?.cards
          ?.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // 🔑 store original + filtered list
      setAllRestaurants(restaurantList || []);
      setRestaurants(restaurantList || []);

    } catch (err) {
      console.error("Failed to fetch restaurants", err);
      setAllRestaurants([]);
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // 🔑 SEARCH ALWAYS RUNS ON ORIGINAL DATA
              const filtered = allRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // 🔑 FILTER ALSO RUNS ON ORIGINAL DATA
            const filtered = allRestaurants.filter(
              (res) => Number(res?.info?.avgRating) > 4
            );
            setRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="rest-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

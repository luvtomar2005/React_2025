

import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);     // original data
  const [restaurants, setRestaurants] = useState([]);           // filtered data

  const [loading, setLoading] = useState(true);


  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchRestaurants();
  }, []);

   // using the online status hook 
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return(
    <h1>
      You are offline!!
    </h1>
  )
  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await res.json();

      
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


import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();

      const list =
        json?.data?.cards
          ?.find(
            (c) =>
              c?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setAllRestaurants(list || []);
      setRestaurants(list || []);
    } catch (e) {
      setAllRestaurants([]);
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  if (!onlineStatus) return <h1>You are offline!!</h1>;
  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        {/* SEARCH */}
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filtered = allRestaurants.filter((r) =>
              r.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestaurants(filtered);
          }}
        >
          Search
        </button>

        {/* LIVE USERNAME INPUT */}
        <div className="m-4">
          <label>UserName : </label>
          <input
            className="border border-black p-2 ml-2"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            const filtered = allRestaurants.filter(
              (r) => Number(r.info.avgRating) > 4
            );
            setRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="rest-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

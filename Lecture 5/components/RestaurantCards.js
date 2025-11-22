import { CDN_URL } from "../utils/constants2";
const RestaurantCard = ({ resData }) => {
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />

      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating} Stars</h4>
      <h4>{resData.data.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
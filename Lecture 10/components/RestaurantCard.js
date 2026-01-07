import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCard = ({ resData }) => {
  if (!resData?.info) return null;
  const {loggedInUser} = useContext(UserContext);
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
  } = resData.info;

  return (
    <div className="res-card">
      {cloudinaryImageId ? (
        <img
          className="res-logo"
          src={IMG_CDN + cloudinaryImageId}
          alt={name}
        />
      ) : (
        <div className="img-placeholder">No Image</div>
      )}

      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h5>{loggedInUser}</h5>
    </div>
  );
};

export default RestaurantCard;

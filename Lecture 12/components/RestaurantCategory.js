

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div>
      {/* HEADER */}
      <div
        onClick={setShowIndex}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {data.title} ({data.itemCards.length})
      </div>

      {/* BODY */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

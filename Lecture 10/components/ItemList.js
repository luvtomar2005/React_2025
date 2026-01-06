import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          {/* LEFT SECTION */}
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">
                {item.card.info.name}
              </span>
              <span className="ml-2">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <button className="p-2 px-6 rounded-lg bg-white shadow-lg text-green-600 font-semibold">
                Add +
              </button>
            </div>

            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

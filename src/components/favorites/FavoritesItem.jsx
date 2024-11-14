import star from "/star.svg";
import locationIcon from "/location.svg";
import deleteIcon from "/delete.svg";

const FavoritesItem = ({ picture, name, location, ratings }) => {
  return (
    <div className="bg-white w-full rounded-md shadow-lg flex mb-2 justify-between p-4">
      <div className="flex items-center gap-4">
        <img src={picture} alt="" className="rounded-md" />
        <div>
          <p className="text-black font-semibold">{name}</p>
          <p className="text-black mt-2 text-xs flex gap-2">
            <img src={locationIcon} alt="" />
            {location}
          </p>
          <p className="text-black text-xs flex gap-2">
            <img src={star} alt="" />
            {ratings.toFixed(1)} Ratings
          </p>
        </div>
      </div>
      <img src={deleteIcon} alt="" className="cursor-pointer" />
    </div>
  );
};

export default FavoritesItem;

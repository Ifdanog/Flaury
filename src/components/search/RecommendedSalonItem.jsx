import dot from "/dot.svg";
import star from "/star.svg";
import verified from "/verified.svg";
import tagIcon from "/tag.svg";

const RecommendedSalonItem = ({
  name,
  location,
  distance,
  ratings,
  isVerified,
  tag,
  image,
  pictures,
}) => {
  return (
    <div className="text-black sm:flex items-center gap-8 mb-8 w-full">
      <img src={image} alt={name} className="w-full md:w-1/2" />
      <div className="w-full md:w-1/2">
        <div className="py-2 flex justify-between">
          <div>
            <h3 className="font-bold text-xl">{name}</h3>
            <p className="text-xs flex">
              {location} <img src={dot} alt="" className="mx-2" />
              {distance}
            </p>
            <p className="text-xs flex">
              Ratings <img src={dot} alt="" className="mx-2" />
              {ratings} <img src={star} alt="" className="mx-2" />
            </p>
          </div>
          <div className="flex flex-col justify-between text-right">
            {isVerified && (
              <div className="bg-[#1b771b] flex gap-2 text-xs text-[#fff] rounded-lg px-3 py-1">
                <img src={verified} alt="" /> Verified
              </div>
            )}
            {tag && (
              <span className="bg-[#ff780199] flex w-[9rem] mt-4 gap-2 text-xs rounded-lg px-3 py-1">
                <img src={tag} alt="" />
                SAVE UP TO 20%
              </span>
            )}
          </div>
        </div>
        <hr className="border-[#1b771b] my-4" />
        <div className="grid grid-cols-4 gap-2">
          {pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`${name}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSalonItem;

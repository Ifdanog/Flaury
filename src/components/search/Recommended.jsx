import RecommendedSalonItem from "./RecommendedSalonItem";

const Recommended = () => {
  const recommendedSalons = [
    {
      id: 1,
      name: "Timeless Salon",
      location: "Dome Hills, idan",
      distance: "20km away",
      ratings: 4.5,
      isVerified: true,
      tag: true,
      image: "/timelessrecommended.png",
      pictures: ["/1.png", "/2.png", "/3.png", "/4.png"],
    },
    {
      id: 2,
      name: "Timeless Salon",
      location: "Dome Hills, idan",
      distance: "20km away",
      ratings: 4.5,
      isVerified: true,
      tag: true,
      image: "/timelessrecommended.png",
      pictures: ["/1.png", "/2.png", "/3.png", "/4.png"],
    },
    {
      id: 3,
      name: "Timeless Salon",
      location: "Dome Hills, idan",
      distance: "20km away",
      ratings: 4.5,
      isVerified: true,
      tag: true,
      image: "/timelessrecommended.png",
      pictures: ["/1.png", "/2.png", "/3.png", "/4.png"],
    },
  ];
  return (
    <div className="w-full mt-10">
      {recommendedSalons.map((recommendedSalon) => (
        <RecommendedSalonItem
          key={recommendedSalon.id}
          name={recommendedSalon.name}
          location={recommendedSalon.location}
          distance={recommendedSalon.distance}
          ratings={recommendedSalon.ratings}
          isVerified={recommendedSalon.isVerified}
          tag={recommendedSalon.tag}
          image={recommendedSalon.image}
          pictures={recommendedSalon.pictures}
        />
      ))}
    </div>
  );
};

export default Recommended;

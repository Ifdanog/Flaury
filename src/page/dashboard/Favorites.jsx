import React, { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";
import FavoritesItem from "../../components/favorites/FavoritesItem";
import { Link } from "react-router-dom";
import backarrow from "/backarrow.svg";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Favorites = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulated fetch call
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Simulated Favorites data
        const favoritesData = [
          {
            id: 1,
            name: "Timeless Salon",
            location: "Dome Hills, Idan (20km)",
            ratings: 4.5,
            picture: "/timelesssalon.png",
          },
          {
            id: 2,
            name: "Timeless Salon",
            location: "Dome Hills, Idan (20km)",
            ratings: 4.0,
            picture: "/timelesssalon.png",
          },
          {
            id: 3,
            name: "Timeless Salon",
            location: "Dome Hills, Idan (20km)",
            ratings: 5.0,
            picture: "/timelesssalon.png",
          },
        ];

        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex gap-8 text-primaryColor lg:pr-8">
        {/* {isSmallViewport ? null : <SideNav />} */}
        <div className="mt-4 md:mt-20 w-full px-4 md:px-0">
          <Link to="/dashboard" className="flex gap-2">
            <img src={backarrow} alt="" />
            <h3 className="text-2xl font-bold">My Favorites</h3>
          </Link>
          <div className="container mx-auto py-8">
            <div className="">
              {favorites.map((favorite) => (
                <FavoritesItem
                  key={favorite.id}
                  name={favorite.name}
                  location={favorite.location}
                  ratings={favorite.ratings}
                  picture={favorite.picture}
                />
              ))}
            </div>
            {favorites.length === 0 && (
              <p className="text-center">No favorites</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Favorites;

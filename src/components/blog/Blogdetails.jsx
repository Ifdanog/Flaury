import React from "react";

const blogData = [
  {
    id: 1,
    image: "/blog-img.png",
    title: "Top 10 Trending Female Hairstyles in 2024.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    image: "/blog-img.png",
    title: "Cornrow Vs Maizerow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 3,
    image: "/blog-img.png",
    title: "Haircare Routine to Boost Hair Growth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 4,
    image: "/blog-img.png",
    title: "Lipstick Diaries: A Journey through Beauty's Color Palette",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 5,
    image: "/blog-img.png",
    title: "Glamour Chronicles: Navigating Makeup & Beauty Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 6,
    image: "/blog-img.png",
    title: "Timeless Elegance: Makeup Secrets Unveiled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

const Blogdetails = () => {
  return (
    <section className="px-4 md:px-20 py-10">
      <h3 className="font-bold text-4xl pb-4">Blog</h3>
      <p>
        <span className="text-primaryColor">
          Discover And Unleash the Beauty Inside of You :
        </span>
        <br />
        Your Guide to Beauty and Wellness
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {blogData.map((blogdetail) => (
          <div key={blogdetail.id} className="rounded-md">
            <img src={blogdetail.image} alt="" className="w-full" />
            <div className="md:p-4 md:shadow-md md:rounded-lg">
              <h4 className="text-xl font-bold py-2">{blogdetail.title}</h4>
              <p className="text-sm">{blogdetail.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-primaryColor mt-10 text-center font-bold">Read more</p>
    </section>
  );
};

export default Blogdetails;

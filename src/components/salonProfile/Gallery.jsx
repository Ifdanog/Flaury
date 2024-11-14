import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <img src="/gallery-img1.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
        <img src="/gallery-img4.png" alt="" className="w-full h-full" />
        <img src="/gallery-img5.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
        <img src="/gallery-img4.png" alt="" className="w-full h-full" />
        <img src="/gallery-img1.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
        <img src="/gallery-img5.png" alt="" className="w-full h-full" />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <img src="/gallery-img4.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
        <img src="/gallery-img5.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
        <img src="/gallery-img1.png" alt="" className="w-full h-full" />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <img src="/gallery-img1.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
        <img src="/gallery-img4.png" alt="" className="w-full h-full" />
        <img src="/gallery-img5.png" alt="" className="w-full h-full" />
        <div>
          <img src="/gallery-img2.png" alt="" className="w-full mb-4" />
          <img src="/gallery-img3.png" alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Gallery;

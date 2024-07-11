import React, { useEffect, useState } from "react";
import "./Carousel.js";
import "./Carosel.scss";
const images = [
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690x300_Galaxy-S24_06%20(2).png",
    thumb: "img_5terre.jpg",
    alt: "Cinque Terre",
    des: "GALAXY S24 SERIES",
    dest: " Giá tốt chốt ngay",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/realme-c60-sliding-25-6-2024.png",
    thumb: "img_mountains.jpg",
    alt: "Mountains and fjords",
    des: "REALME C60 SERIES",
    dest: " Giá Chỉ 2.79 triệu",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nang-cap-iphone-15-prm-chip-sliding-20-602024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "IPHONE 15 SERIES",
    dest: " Nâng cấp ngay",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/poco-m6-sliding-cate-27-6-2024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "POCO M6 ",
    dest: " Giá chỉ 3.99 triệu",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/o-ro-o-re-giam-60-slide.png",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "Ơ RÔ Ơ RẺ",
    dest: " Giảm đến 60%",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/may-loc-khong-khi-levoit-vital-home.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "LEVOIT VITAL",
    dest: "Giá từ 2.89 triệu",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tai-nghe-chup-tai-marshall-major-5-home-26-6-2024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "MẢRSHALL MAJOR 5",
    dest: "Giá chỉ 4.99 triệu",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tai-nghe-tour-pro-sliding-25-6-2024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "TOUR PRO 2",
    dest: "Giá sốc mua ngay",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tai-nghe-chup-tai-marshall-major-5-home-26-6-2024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "MẢRSHALL MAJOR 5",
    dest: "Giá chỉ 4.99 triệu",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/tai-nghe-tour-pro-sliding-25-6-2024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
    des: "TOUR PRO 2",
    dest: "Giá sốc mua ngay",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
   const [startIndex, setStartIndex] = useState(0);
  const plusSlides = (n: number) => {
    let newSlide = currentSlide + n;
    if (newSlide >= images.length) {
      newSlide = 0; 
    } else if (newSlide < 0) {
      newSlide = images.length - 1; 
    }
    setCurrentSlide(newSlide);
      if (newSlide < startIndex || newSlide >= startIndex + 5) {
        setStartIndex(newSlide - (newSlide % 5));
      }
  };
   useEffect(() => {
     const interval = setInterval(() => {
       plusSlides(1);
     }, 5000); // Change slide every 5 seconds

     return () => clearInterval(interval); // Cleanup on component unmount
   }, [currentSlide]);
  return (
    <div className="carousel">
      <div className="container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`mySlides ${currentSlide === index ? "active" : ""}`}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>

      <div className="thumbnail-container">
        {images.slice(startIndex, startIndex + 5).map((img, index) => (
          <div
            key={index}
            className={`thumbnail ${
              currentSlide === index + startIndex ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index + startIndex)}
          >
            <div className="imager_des">{img.des}</div>
            <div className="imager_dest">{img.dest}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

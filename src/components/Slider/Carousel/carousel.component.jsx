// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./carousel.styles.scss";

// import ImgCarousel1 from "./../../../assets/img/slider1/image 5.png";
// import ImgCarousel2 from "./../../../assets/img/slider1/image 6.png";
// import ImgCarousel3 from "./../../../assets/img/slider1/image 7.png";
// import ImgCarousel4 from "./../../../assets/img/slider1/image 8.png";
// import ImgCarousel5 from "./../../../assets/img/slider1/image 9.png";

// const Carousel = () => {
//   let [settings, setSettings] = useState({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "2rem",
//   });

//   function throttleFunction(cb, limit) {
//     let wait = false;
//     return function () {
//       if (!wait) {
//         cb.call();
//         wait = true;
//         setTimeout(() => {
//           wait = false;
//         }, limit);
//       }
//     };
//   }

//   useEffect(() => {
//     function slideCount() {
//       if (window.innerWidth < 1400 && window.innerWidth > 900) {
//         console.log("random shit");
//         setSettings({
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "2rem",
//         });
//       } else if (window.innerWidth < 900 && window.innerWidth > 700) {
//         setSettings({
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "6rem",
//         });
//       } else if (window.innerWidth < 700) {
//         setSettings({
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "4rem",
//         });
//       } else if (window.innerWidth > 1400) {
//         setSettings({
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "4rem",
//         });
//       }
//     }

//     // window.addEventListener('resize', throttleFunction(slideCount,1000))
//     window.addEventListener("load", slideCount);

//     return () => {
//       window.removeEventListener("load", slideCount);
//     };
//   });

//   return (
//     <div className="carousel">
//       <Slider {...settings}>
//         <div className="carousel__item">
//           <img src={ImgCarousel1} alt="" className="carousel__img" />
//         </div>
//         <div className="carousel__item">
//           <img src={ImgCarousel2} alt="" className="carousel__img" />
//         </div>
//         <div className="carousel__item">
//           <img src={ImgCarousel1} alt="" className="carousel__img" />
//         </div>
//         <div className="carousel__item">
//           <img src={ImgCarousel4} alt="" className="carousel__img" />
//         </div>
//         <div className="carousel__item">
//           <img src={ImgCarousel5} alt="" className="carousel__img" />
//         </div>
//         <div className="carousel__item">
//           <img src={ImgCarousel3} alt="" className="carousel__img" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;

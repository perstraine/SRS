//--------------------------------Swiperjs---------------------------------------------//
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import image1 from '../ceiling/assets/A.jpg'
// import image2 from '../ceiling/assets/B.jpg'
// import image3 from "../ceiling/assets/C.jpg";

// import "./Carousel.css";
// export default function Carousel() {
//     const images = [image1, image2, image3]
//     return (
//       <>
//         <Swiper
//           slidesPerView={4}
//                 spaceBetween={30}
//                 // loop={true}
//           centeredSlides={true}
//           pagination={{
//             clickable: true,
//                 }}
//           modules={[Pagination]}
//           className="mySwiper"
//             >
//                 {images.map((image) => {
//                     return <SwiperSlide><img src={image} alt=""/></SwiperSlide>
//                 })}
//           {/* <SwiperSlide>Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide> */}
//         </Swiper>
//       </>
//     );
// }

//--------------------------- Multi-Carousel----------------------------------------------//

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import "./ImageCarousel.css";
// import image1 from "../ceiling/assets/A.jpg";
// import image2 from "../ceiling/assets/B.jpg";
// import image3 from "../ceiling/assets/C.jpg";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//     partialVisibilityGutter: 0,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//     partialVisibilityGutter: 1000,
//   },
// };

// export default function ImageCarousel() {
//   const images = [image1, image2, image3];
//   return (
//     <>
//       <div
//         style={{
//           paddingBottom: "30px",
//           position: "relative",
//         }}
//       >
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           showDots={true}
//           centerMode={true}
//                   renderDotsOutside={true}
//                   draggable={false}

//         >
//           {images.map((image, index) => {
//             return (
//               <div className="carouselImageHolder" key={index}>
//                 <img className="carouselImage" src={image} alt="" />
//               </div>
//             );
//           })}
//         </Carousel>
//       </div>
//     </>
//   );
// }

//-------------------------------------Mantine Carousel-----------------------------------//

import { Carousel } from "@mantine/carousel";
import { useState } from "react";

import "./ImageCarousel.css";

export default function ImageCarousel({images}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Carousel
        slideSize={1000}
        height={582}
        slideGap="lg"
        loop
        onSlideChange={(number) => {
          setActiveIndex(number);
        }}
        withIndicators
      >
        {images.map((image, index) => {
          return (
            <Carousel.Slide key={index}>
              <img
                className={activeIndex === index ? "activeSlide" : "slide"}
                src={image}
                alt=""
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
}

// import img10 from "../img/10.jpeg";
// import img11 from "../img/11.jpeg";
// import img12 from "../img/12.jpeg";
// import slide from "../Style/slide.css";
// import React, { useState } from "react";
// import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

// const items = [
//   {
//     src: img10,
//     key: 1,
//   },
//   {
//     src: img11,
//     key: 2,
//   },
//   {
//     src: img12,
//     key: 3,
//   },
// ];

// function slides(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} />
//       </CarouselItem>
//     );
//   });

//   return (
//     <>
//       <Carousel
//         activeIndex={activeIndex}
//         next={next}
//         previous={previous}
//         {...args}
//       >
//         {slides}
//         <CarouselControl
//           direction="prev"
//           directionText="Previous"
//           onClickHandler={previous}
//         />
//         <CarouselControl
//           direction="next"
//           directionText="Next"
//           onClickHandler={next}
//         />
//       </Carousel>
//       <div className="btn-slide">
//         <a href="#" style={{ zIndex: "100" }}>
//           Miến Phí vận chuyển đơn hàng trên 200k
//         </a>
//         <a href="#" style={{ zIndex: "100" }}>
//           60 ngày trả , đổi bất kì lý do gì
//         </a>
//         <a href="#" style={{ zIndex: "100" }}>
//           Đến nơi nhận hàng trả , hoàn tiền trong 24h
//         </a>
//       </div>
//     </>
//   );
// }

// export default slides;

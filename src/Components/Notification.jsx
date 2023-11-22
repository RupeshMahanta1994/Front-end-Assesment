import React from "react";
import card1 from "../../src/assets/Notification Cards/Card 1.svg";
import card2 from "../../src/assets/Notification Cards/Card2.svg";
import card3 from "../../src/assets/Notification Cards/Card3.svg";
import Carousel from "nuka-carousel";

const param = {
  slidesToShow: 2,
  animation: "zoom",

  wrapAround: true,
  autoplay: true,
  autoplayInterval: 1700,
  defaultControlsConfig: {
    containerClassName: "NotificationConatainer",
  },
};

const Notification = () => {
  return (
    <div className=" relative ">
      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 m-auto shadow ">
        1
      </div>
      <Carousel {...param} className="">
        <img className="" src={card1} />
        <img src={card2} />
        <img src={card3} />
      </Carousel>
    </div>
  );
};

export default Notification;

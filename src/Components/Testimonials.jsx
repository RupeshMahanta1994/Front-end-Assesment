import React, { useEffect, useState } from "react";
import Frame1 from "../assets/Testimonials/Frame1.svg";
import Frame2 from "../assets/Testimonials/Frame2.svg";
import "./component.css";
import Carousel from "nuka-carousel";

const Testimonials = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  //Function to get Current Dimension
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  let slidestoShow;

  //condition if current dimension is mobile view set number of slides to show is one
  {
    screenSize.width === 320 ? (slidestoShow = 1) : (slidestoShow = 2);
  }

  //Attributes for carousel
  const param = {
    slidesToShow: `${slidestoShow}`,
    wrapAround: true,
    defaultControlsConfig: {
      containerClassName: "container",
    },
  };
  return (
    <Carousel {...param}>
      <img src={Frame1} />
      <img src={Frame2} />
      <img src={Frame1} />
    </Carousel>
  );
};

export default Testimonials;

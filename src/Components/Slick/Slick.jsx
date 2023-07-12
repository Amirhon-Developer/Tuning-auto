import React from 'react'
import Slider from "react-slick";

const Slick = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    
    <Slider {...settings}>
      
      <div className="container">
            <div>
             1
            </div>
            <div>2</div>
            <div>3</div>
            </div>
    </Slider>
  )
}

export default Slick
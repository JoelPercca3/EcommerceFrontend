import React from "react";
import Slider from "react-slick";



const HomeBanner = () =>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true

      };
    return(
        <div className="homeBannerSection">
           <Slider {...settings}>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg" className="w-100"></img>
                  </div>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" className="w-100"></img>
                  </div>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" className="w-100"></img>
                  </div>
                 
           </Slider>
        </div>
    )
}

export default HomeBanner;
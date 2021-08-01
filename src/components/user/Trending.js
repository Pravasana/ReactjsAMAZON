import React from 'react'
import Slider from "react-slick";
import './trending.css' 
const Trending = () => {

    const settings = {
        dots: false,
        autoplay:true,
        infinite:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
          <div className="comrainer">
              <div className="row mt-3 mb-3">
                 <Slider {...settings}>
                    <div>
                        <img src="images/g1.jpg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                         <img src="images/g.jpg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                         <img src="images/bird.jpg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                         <img src="images/cat.jpeg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                         <img src="images/dog.jpg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                          <img src="images/ab1.jpg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                          <img src="images/flake.jpeg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                    <div>
                          <img src="images/wallpaper.jpg" className="img-fluid" style={{height:'200px'}}/>
                    </div>
                 </Slider>
             </div>
         </div>  
        </>
    )
}

export default Trending

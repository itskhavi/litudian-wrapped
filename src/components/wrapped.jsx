import React from 'react';
import Slider from 'react-slick';
import Intro from './intro';
import Intro2 from './intro2';
import Persona from './persona';
import Categoriez from './categories';
import Favorites from './favorites';
import Stats from './stats';
import Moments from './moments';
import Highlights from './highlights';
import Feedback from './feedback';
import Thankyou from './thankyou';

const LitudianWrapped = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative h-screen w-[98%] justify-center items-center">
      <Slider {...settings}>
        <div>
          <Intro />
        </div>
        <div>
          <Intro2 />
        </div>
        <div>
          <Persona/>
        </div>
        <div>
          <Categoriez/>
        </div>
        <div>
          <Favorites/>
        </div>
        <div>
            <Stats/>
        </div>
        <div>
            <Moments/>
        </div>
        <div>
            <Highlights/>
        </div>
        <div>
            <Feedback/>
        </div>
        <div>
            <Thankyou/>
        </div>
        {/* Add additional cards here */}
      </Slider>
    </div>
  );
};

export default LitudianWrapped;

import Slider from "react-slick";
import { images } from "../images";

function SlideWindow() {
  // slider settings
  const settings = {
    dots: true,            // small dots below
    infinite: true,        // loop slides
    speed: 500,            // transition speed
    slidesToShow: 1,       // show one at a time
    slidesToScroll: 1,
    autoplay: true,        // auto scroll
    autoplaySpeed: 3000,   // 3s per slide
    arrows: true           // left-right arrows
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <img src={images.slideTractor1} className="w-full h-[300px] object-cover" alt="Slide 1" />
        </div>
        <div>
          <img src={images.slideTractor2} className="w-full h-[300px] object-cover" alt="Slide 2" />
        </div>
        <div>
          <img src={images.slideTractor3} className="w-full h-[300px] object-cover" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default SlideWindow;

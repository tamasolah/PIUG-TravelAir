import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

export default function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    autoplay: {
      delay: 3000,
      stopOnInteraction: false,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider h-[300px] sm:h-[400px] md:h-[500px]">
      <div className="keen-slider__slide number-slide1">
        <img
          src="https://mediacdn.libertatea.ro/unsafe/1260x708/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/01/norvegia-locuri-de-vizitat-obiective-turistice.jpg"
          alt="Slide 1"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src="https://mediacdn.libertatea.ro/unsafe/1260x708/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2021/11/locuri-de-vizitat-in-spania.jpg"
          alt="Slide 2"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img
          src="https://static4.libertatea.ro/wp-content/uploads/2022/05/locuri-de-vizitat-in-roma.jpg"
          alt="Slide 3"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img
          src="https://wallpapersok.com/images/hd/europe-s-verona-city-in-italy-cbaucl6ueo5tkgy3.jpg"
          alt="Slide 4"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <img
          src="https://wallpapercave.com/wp/wp3282042.jpg"
          alt="Slide 5"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img
          src="https://wallpapersok.com/images/hd/europe-grand-canal-photograph-0fciz958nnjactze.jpg"
          alt="Slide 6"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide7">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/822/89/150/urban-prague-wallpaper-preview.jpg"
          alt="Slide 7"
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="keen-slider__slide number-slide8">
        <img
          src="https://wallpapercave.com/wp/wp3282035.jpg"
          alt="Slide 8"
          className="w-full h-full object-fill rounded"
        />
      </div>
    </div>
  );
}

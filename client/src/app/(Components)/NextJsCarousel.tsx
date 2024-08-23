// components/NextJsCarousel.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const NextJsCarousel = () => {
  return (
    <div className="mb-8">
      {" "}
      {/* Add margin-bottom for spacing */}
      <Carousel
        autoPlay // Enables automatic slide transitions
        interval={2000} // Time between slide transitions in milliseconds
        infiniteLoop
        showThumbs={false} // Hides thumbnails, adjust based on preference
        showStatus={false} // Hides status indicator, adjust based on preference
        transitionTime={500} // Duration of the transition effect
      >
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/125/926/non_2x/reading-day-banner-with-people-reading-books-vector.jpg"
            alt="image1"
            className="max-h-96 w-auto mx-auto"
          />
        </div>
        <div>
          <img
            src="https://cdn.shedefined.com.au/wp-content/uploads/2020/12/09140111/Short-reads-960x540-drop-shadow.jpg"
            alt="image2"
            className="max-h-96 w-auto mx-auto"
          />
        </div>
        <div>
          <img
            src="https://st2.depositphotos.com/41964238/42538/i/450/depositphotos_425380758-stock-photo-bookshelves-library-old-books-render.jpg"
            alt="image3"
            className="max-h-96 w-auto mx-auto"
          />
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/126/051/small/set-of-people-reading-books-vector.jpg"
            alt="image4"
            className="max-h-96 w-auto mx-auto"
          />
        </div>
        <div>
          <img
            src="https://assets.penguinrandomhouse.com/wp-content/uploads/2022/07/16105107/PRH_Short-books_HP_5-BOOKS_1200x628.jpg"
            alt="image5"
            className="max-h-96 w-auto mx-auto"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default NextJsCarousel;

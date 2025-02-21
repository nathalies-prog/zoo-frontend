import { useState } from "react";
import red from "../assets/red.jpeg";
import tiger from "../assets/tiger.jpeg";
import gorilla from "../assets/gorilla.jpeg";
import penguin from "../assets/penguin.jpeg";
import erd from "../assets/erd.jpeg";
const ImageSlider = () => {
  const images = [red, tiger, gorilla, penguin, erd];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Bild ${currentIndex}`}
          className="h-auto w-full rounded-lg"
        />
      </div>

      <div className="absolute top-1/2 right-0 left-0 flex justify-between px-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="rounded-full bg-gray-800 p-2 text-white shadow-md"
          aria-label="Previous image"
        >
          &lt;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1))
          }
          className="rounded-full bg-gray-800 p-2 text-white shadow-md"
          aria-label="Next image"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

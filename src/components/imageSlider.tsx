import { useState } from "react";
import red from "../assets/red.jpeg";
import tiger from "../assets/tiger.jpeg";
import gorilla from "../assets/gorilla.jpeg";
import penguin from "../assets/pinguin.jpeg";
import erd from "../assets/erd.jpeg";
import dog from "../assets/dog.jpeg";
import nille from "../assets/nilpferde.jpeg"
import hai from "../assets/hai.webp"
import kroko from "../assets/kroko.jpeg"
const ImageSlider = () => {
  const images = [red, tiger,penguin,gorilla, erd, dog,nille,hai,kroko];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Bild ${currentIndex}`}
          className="h-auto w-[800px] rounded-lg"
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

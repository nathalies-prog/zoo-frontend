import AnimalCards from "../components/animal-cards";
import { Header } from "../components/header";
import ImageSlider from "../components/imageSlider";
import { AddAnimal } from "../components/newAnimal";

export function Tiere() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow pt-32 ">
        <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-[#014034] via-[#D9C7B8] to-[#014034] my-8">
          Ein paar unserer Tiere lassen sich sogar fotografieren..
        </h1>
        <ImageSlider />
        <h3 className="text-2xl font-semibold text-center text-gray-700 mt-10 mb-6">
          Hier ist unser derzeitiger Tierbestand:
        </h3>
        <AddAnimal/>
        <AnimalCards />
      </div>
    </div>
  );
}

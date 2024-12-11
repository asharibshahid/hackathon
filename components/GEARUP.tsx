import { GearCarousel1 } from "@/components/GearCarousel1";
import { GearCarousel2 } from "@/components/GearCarousel2";

export default function GearUp() {
  return (
    <section className="py-10 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Section Title */}
      <h1 className="font-extrabold text-4xl mb-8 text-center text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 bg-clip-text">
        Gear Up
      </h1>

      {/* Carousels Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carousel 1 */}
        <div className="p-5 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <GearCarousel1 />
        </div>

        {/* Carousel 2 */}
        <div className="p-5 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <GearCarousel2 />
        </div>
      </div>
    </section>
  );
}

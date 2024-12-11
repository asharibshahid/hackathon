import Image from "next/image";

export default function Essential() {
  return (
    <section className="m-6 py-10 px-4 bg-white shadow-md rounded-lg">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="font-extrabold text-3xl text-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          The Essentials
        </h2>
        <p className="text-gray-600 mt-2">Discover your must-have essentials for every moment.</p>
      </div>

      {/* Image Grid */}
      <div className="flex justify-center flex-wrap gap-6">
        {/* Image 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            width={300}
            height={300}
            alt="Essential Item 1"
            src="/e1.png"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Image 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            width={300}
            height={300}
            alt="Essential Item 2"
            src="/e2.png"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Image 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            width={300}
            height={300}
            alt="Essential Item 3"
            src="/e3.png"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

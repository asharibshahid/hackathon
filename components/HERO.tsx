import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 p-6 lg:p-12 rounded-lg shadow-lg overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 opacity-10 blur-3xl"></div>

      {/* Header Text */}
      <div className="relative flex flex-col items-center text-center space-y-4 z-10">
        <h3 className="text-2xl lg:text-3xl text-gray-800 font-extrabold tracking-tight">Hello, Thats a Nike App</h3>
        <p className="text-sm lg:text-base text-gray-700">
          <span>Download the app to access everything Nike.</span>{" "}
          <Link href="/" className="text-indigo-500 underline hover:text-indigo-600">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-5xl h-auto mt-6 lg:mt-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/Hero.png"
          alt="shoes"
          width={1344}
          height={700}
          className="rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center text-center space-y-6 p-6 lg:p-10">
        <p className="text-sm uppercase tracking-wider text-indigo-500">First Look</p>
        <h2 className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-800">
          Nike Air Max Pulse
        </h2>
        <p className="text-sm lg:text-base text-gray-700 leading-6 lg:leading-8 max-w-2xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push
          you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 shadow-md transform transition-transform duration-300 hover:scale-105">
            Notify Me
          </Button>
          <Button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 shadow-md transform transition-transform duration-300 hover:scale-105">
            Shop Air Max
          </Button>
        </div>
      </div>
    </section>
  );
}
import * as React from "react";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { gear1 } from "@/data/detail";

export function GearCarousel1() {
  return (
    <div className="relative p-4 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-lg">
      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {gear1.map((item) => (
            <CarouselItem
              key={item.id}
              className="lg:basis-1/2 transition-transform duration-300 hover:scale-105"
            >
              <Link href={""}>
                {/* Card Container */}
                <div className="p-1">
                  <Card className="rounded-lg shadow-md">
                    <CardContent className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 aspect-square group overflow-hidden rounded-lg">
                      <Image
                        src={item.img}
                        alt={"shoes"}
                        width={440}
                        height={440}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Product Info */}
                <div className="flex justify-between mx-2 mt-2 items-center">
                  <h1 className="font-semibold text-sm text-gray-800">
                    {item.title}
                  </h1>
                  <h2 className="font-semibold text-sm text-gray-700">
                    {item.price}
                  </h2>
                </div>
                <h3 className="ml-2 text-sm text-gray-600">{item.title2}</h3>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <CarouselPrevious className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors" />
          <CarouselNext className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors" />
        </div>
      </Carousel>
    </div>
  );
}

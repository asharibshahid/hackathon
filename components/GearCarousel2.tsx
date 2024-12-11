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

import { gear2 } from "@/data/detail";

export function GearCarousel2() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {gear2.map((item) => (
          <CarouselItem
            key={item.id}
            className="lg:basis-1/2 transform transition-transform duration-300 hover:scale-105"
          >
            <Link href={""}>
              <div className="p-3">
                <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="bg-gray-100 aspect-square group relative overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={440}
                      height={440}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="mx-2 mt-2">
                <h1 className="font-semibold text-md text-gray-800">
                  {item.title}
                </h1>
                <h2 className="font-semibold text-md text-blue-600">
                  {item.price}
                </h2>
                <h3 className="text-sm text-gray-600">{item.title2}</h3>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Controls */}
      <div className="absolute bottom-[350px] md:bottom-[430px] right-10 flex gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}

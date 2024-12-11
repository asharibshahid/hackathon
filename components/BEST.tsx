"use client";

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
import { airMax } from "@/data/detail";

export function CarouselSize() {
  return (
    <div className="relative w-full px-4 py-8 bg-black">
      <h2 className="text-center text-2xl font-bold mb-6">Featured Air Max Collection</h2>
      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent className="flex gap-4">
          {airMax.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 lg:basis-1/3 transition-transform transform hover:scale-105"
            >
              <Link href={"#"} className="group">
                <div className="p-2">
                  <Card className="shadow-lg rounded-lg overflow-hidden">
                    <CardContent className="bg-[#F5F5F5] aspect-square flex items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={440}
                        height={440}
                        className="object-contain group-hover:opacity-90"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-2 mx-2">
                  <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-base truncate">{item.title}</h1>
                    <h2 className="font-semibold text-base text-green-600">{item.price}</h2>
                  </div>
                  <h3 className="text-sm text-gray-500 truncate">{item.title2}</h3>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation */}
        <div className="absolute bottom-[-30px] right-10 flex items-center gap-2">
          <CarouselPrevious className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md" />
          <CarouselNext className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md" />
        </div>
      </Carousel>
    </div>
  );
}
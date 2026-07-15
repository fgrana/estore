"use client";
import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel >
        <img src="/images/carousel-1.jpg" alt="..." className="h-full w-full object-cover" />
        <img src="/images/carousel-2.jpg" alt="..." className="h-full w-full object-cover" />
        <img src="/images/carousel-3.jpg" alt="..." className="h-full w-full object-cover" />
        <img src="/images/carousel-4.jpg" alt="..." className="h-full w-full object-cover" />
        <img src="/images/carousel-10.jpg" alt="..." className="h-full w-full object-cover" />
      </Carousel>
    </div>
  );
}
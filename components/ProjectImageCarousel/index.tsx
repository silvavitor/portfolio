"use client";

import Image from "next/image";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles.css";

type ProjectImageCarouselProps = {
  images: string[]
  alt: string
}

export default function ProjectImageCarousel({ images, alt }: ProjectImageCarouselProps) {
  return (
    <div className="max-w-full mt-4">
      <Carousel
        infiniteLoop
        autoPlay
        emulateTouch
        showStatus={false}
        centerMode={false}
        renderThumbs={() => (
          images.map((thumb, index) => (
            <div key={index} >
              <Image
                className="rounded-sm"
                src={`/images/${thumb}`}
                alt={alt}

                width={400}
                height={225}
              />
            </div>
          ))
        )}
      >
        {
          images.map((image, index) => (
            <Image
              className="rounded-md px-2"
              key={index}
              alt={alt}
              src={`/images/${image}`}
              width={1280}
              height={720} />
          ))
        }
      </Carousel >
    </div>
  );
}
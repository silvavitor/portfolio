"use client"

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Thumb from '../Thumb';



type EmblaCarouselProps = {
  options?: EmblaOptionsType;
  altText: string;
  images: string[];
}

export default function EmblaCarousel({ options, images, altText }: EmblaCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) {
        return;
      }
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) {
      return;
    }
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) {
      return;
    }
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="py-7">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="backface-hidden flex touch-pan-y ml-[-1rem]">
          {images.map((image, index) => (
            <div className="pl-4 min-w-0 relative flex-0-100" key={index}>
              <Image
                className="block h-full w-full object-cover rounded-md border border-black" priority
                src={`/images/${image}`}
                width={1280}
                height={720}
                alt={altText} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 px-2 pb-2 pt-3 bg-neutral-200 rounded-lg">
        <div className="overflow-hidden h-[104px]" ref={emblaThumbsRef}>
          <div className="flex flex-row ml-[-.075rem]">
            {images.map((image, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={image}
                altText={altText}
                key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
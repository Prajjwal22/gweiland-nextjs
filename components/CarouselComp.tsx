"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ButtonGroupProps,
  ArrowProps,
  DotProps,
} from "react-multi-carousel/lib/types";

export default function CarouselComponent() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="relative w-full h-full">
        <Image
          className="w-full h-full md:h-auto object-cover md:object-contain object-center"
          src="/DSC00058_CAROUSEL_1_1440x650_crop_center 1.png"
          width={1000}
          height={650}
          alt="image1"
        />
        <span
         data-te-animation-init
         data-te-animation-start="onLoad"
         data-te-animation-reset="true"
         data-te-animation="[slide-right_1s_ease-in-out]"
          className="absolute z-50 top-1/3 md:text-7xl text-4xl  left-10 md:left-20 text-white font-bold"
        >
          heritage <br />
          hoodies
        </span>
      </div>
      <div className="relative w-full h-full">
        <Image
          className="w-full  h-full md:h-auto object-cover md:object-contain object-center"
          src="/DSC00198_CAROUSEL_1_1440x650_crop_center 1.png"
          width={1000}
          height={600}
          alt="image1"
        />{" "}
        <span className="absolute z-50 top-1/3 md:text-7xl text-4xl  left-10 md:left-20 text-white font-bold">
          premium <br />
          zip
          <br />
          hoodies{" "}
        </span>
      </div>
      <div className="relative w-full h-full">
        <Image
          className="w-full  h-full md:h-auto object-cover md:object-contain object-center"
          src="/DSC09179_CAROUSEL_1_1440x650_crop_center 1.png"
          width={1000}
          height={600}
          alt="image1"
        />
        <span className="absolute z-50 top-1/3 md:text-7xl text-4xl  left-10 md:left-20 text-white font-bold">
          premium <br />
          tees
        </span>
      </div>
      <div className="relative w-full h-full">
        <Image
          className="w-full  h-full md:h-auto object-cover md:object-contain object-center"
          src="/DSC09618_CAROUSEL_1_1440x650_crop_center 1.png"
          width={1000}
          height={600}
          alt="image1"
        />{" "}
        <span className="absolute z-50 top-1/3 md:text-7xl text-4xl  right-10 md:right-20 text-white font-bold">
          heritage <br />
          woman's <br />
          tank
        </span>
      </div>
      <div className="relative w-full h-full">
        <Image
          className="w-full h-full md:h-auto object-cover md:object-contain object-center"
          src="/DSC09802_carousel_1440x650_crop_center 1.png"
          width={1000}
          height={600}
          alt="image1"
        />{" "}
        <span className="absolute z-50 top-1/3 md:text-7xl text-4xl  right-10 md:right-20 text-white font-bold">
          heritage <br />
          hoodies
        </span>
      </div>
    </Carousel>
  );
}

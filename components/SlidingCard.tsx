import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./CardCarousel";

export type CardProps = {
 card:Card
}

export default function SlidingCard({card}:Card) {
  console.log(card)
  return (
    <div style={{backgroundColor:card.color}} className="h-36 w-96 rounded-l-full rounded-r-3xl flex justify-between card-slider">
      <Image
        className="w-36 h-36 rounded-full"
        src={card.image}
        width={200}
        height={200}
        alt="icon"
      />
      <div className="flex flex-col justify-between p-5  text-white items-end">
        <span className="font-bold text-2xl">{card.title}</span>
        <Link href="#" className="underline">
          shop now
        </Link>
      </div>
    </div>
  );
  1;
}

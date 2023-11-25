'use client'

import React, {useEffect, useState, useRef, useCallback} from "react";
import SlidingCard from "./SlidingCard";

export type Card = {
   card:{ id:number;
    image:string;
    color:string;
    title:string;}
}

const cardData = [
  {
    id: 1,
    image:
      "/icons/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f_375x_crop_center 1.png",
    color: "#081F2C",
    title: "bitfins",
  },
  {
    id: 2,
    image: "/icons/cryptoraggies-logo-profilepic-trans-2000px_375x_crop_center 1.png",
    color: "#ff8b8b",
    title: "cryptoraggies",
  },
  {
    id: 3,
    image: "/icons/Future_Fest_Profile_Picture_2_375x_crop_center 1.png",
    color: "#000000",
    title: "future fest",
  },
  {
    id: 4,
    image: "/icons/Logo_375x_crop_center 1.png",
    color: "#226cd3",
    title: "$hosky",
  },
  {
    id: 5,
    image: "/icons/meSG3lth_400x400_1_375x_crop_center 1.png",
    color: "#000000",
    title: "vudu brigada",
  },
  {
    id: 6,
    image: "/icons/pendulum-brava-logo_375x_crop_center 1.png",
    color: "#000000",
    title: "pendulum",
  },
];

const SlideCard = (card:Card) => {    
    return (
      <SlidingCard card={card.card}/>
    )
  }



export default function CardCarousel() {
    
    const [items, setItems] = useState(cardData);
    const [animationRunning, setAnimationRunning] = useState(false);
    const indexRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);


    const handleRefUpdate = useCallback((node: React.RefObject<HTMLDivElement>) => {
        if (node !== null && items.length > 0) {
          indexRef.current = node.firstChild;
          wrapperRef.current = node;
          document.documentElement.style.setProperty('--animationDistance', `${0 - indexRef.current.offsetWidth}px`);
          document.documentElement.style.setProperty('--animationDuration', `${Math.round(indexRef.current.offsetWidth / 33)}s`);
          wrapperRef.current.classList.add('moving');
        }
      }, [items]);

      const handleLoop = () => {
        wrapperRef.current.classList.remove('moving');
        wrapperRef.current.style.animation = 'none';
        const t = wrapperRef.current.offsetHeight; /* trigger reflow */
        wrapperRef.current.style.animation = null;
        shiftNext([...items]);
      };
    
      const shiftNext = (copy) => {
        const firstitem = copy.shift();
        copy.splice(copy.length, 0, firstitem);
        setItems(copy);
      };
      
      const handleAnimationEnd = () => {
        handleLoop();
      }


  return (
    <div className="mt-20  no-scrollbar overflow-hidden">
     <div className="inner" ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
        {items.map((card, index) => <SlideCard card={card} key={card.card+index} />
        )} 
      </div>
    
    </div>
  );
}

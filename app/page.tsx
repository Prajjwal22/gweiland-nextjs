import Image from "next/image";
import Announement from "@/components/Announement";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardCarousel from "@/components/CardCarousel";
export default function Home() {
  return (
    <>
      <Announement />
      <Header />
      <Hero />
      <CardCarousel />
    </>
  );
}

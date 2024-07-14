'use client';

import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Servicios from "@/components/Servicios";
import Sobremi from "@/components/Sobremi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-14">
      <Banner />
      <Gallery />
      <article className="rounded-xl flex  flex-col md:flex-row gap-8" >
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}

        >
          <CarouselContent className='w-52  md:w-[25rem]'>
            <CarouselItem ><img src="/img/20.png" alt="" className=" fit-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/2.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/9.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/22.jpg" alt="" className="bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/11.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/12.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/13.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/14.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/15.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/16.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>
            <CarouselItem ><img src="/img/18.jpg" alt="" className=" bg-cover rounded-xl" /></CarouselItem>


          </CarouselContent>

        </Carousel>

        <div className=" md:ml-5 flex gap-10">
          <img src="/img/menu.jpeg" alt="" className="w-[25rem] md:w-[25rem] rounded-xl" />
          <div className="border rounded-xl p-4 hidden md:block">
            <h3 className="font-medium text-[#dc143c] text-2xl text-center">Bebidas clásicas y personalizadas</h3>
            <ol className=" list-disc p-4 text-xl">
              <li>Margarita de Fresa</li>
              <li>Mojito de Sandia</li>
              <li>Pisco de Maracuya</li>
              <li>Caipirinha de Maracuya</li>
              <li>Martini</li>
              <li>Piña Colada</li>
              <li>Bloody Mary</li>
            </ol>
          </div>
        </div>
      </article>
      <h2 className=" text-2xl">Contrata mis Servicios</h2>
      <Servicios />
      <Sobremi />
    </main>
  );
}

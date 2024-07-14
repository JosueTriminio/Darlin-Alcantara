import Instagram from "./Instagram";
import Tiktok from "./Tiktok";
import Whatsapp from "./Whatsapp";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ subsets: ["latin"], weight: '700' });

export default function Banner() {
    return (
        <section className="banner h-[20rem] md:h-[40rem] w-full flex flex-col items-center py-8 relative" id='inicio'>

            <div className="flex flex-col justify-center items-center md:items-center flex-1 z-30">
                <h1 className={`${rowdies.className} text-white font-extrabold text-4xl md:text-7xl`}>DARLIN ALCANTARA</h1>
                <h2 className=" text-3xl md:text-4xl text-[#dc143c] border-b border-[#dc143c] max-w-min">Bartender</h2>
            </div>
            
            <div className="z-10 flex gap-4">
            <a href="https://wa.link/bk6fdp"><Whatsapp /> </a>
                <a href="https://www.instagram.com/alcabarmix?igsh=bG9waTVyNzcyZHV3" target="_blank"><Instagram /></a>
                <a href="#"><Tiktok /></a>
            </div>
            <div className="bg-black h-full   w-full opacity-60 absolute top-0">
            </div>
        </section>
    )
}

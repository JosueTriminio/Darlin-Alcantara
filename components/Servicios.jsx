import React from 'react'
import Instagram from './Instagram';
import Tiktok from './Tiktok';
import Whatsapp from './Whatsapp';


export default function Servicios() {
    return (
        <article className='servicios relative aspect-square w-[90%] md:w-full h-[25rem] md:h-[900px] flex  items-center' id='contacto'>
            <img src="/img/logo.webp" alt="logotipo" className='w-[16rem] md:w-[40rem] md:h-[20rem] absolute top-[-20px] right-[-20px] md:top-0 md:right-6' />
            <div className="flex flex-col gap-4  left-32 bg-[#dc143c] p-6  h-full">
                <h3 className='text-white text-xl'>Contactame</h3>
                <ol className=" list-disc p-4 text-xl">
                    <li>Bartender</li>
                    <li>Barman</li>
                    <li>Cocteles</li>
                    <li>Bebidas Personalizadas</li>
                    <li>Mis Resetas Unicas</li>

                </ol>
                <p className='text-white'>Contactame por Whatsapp.</p>
                <p className='text-white'>+34 722 73 19 25</p>
                <div className='md:py-16 flex gap-5'>
                    <a href="https://wa.link/bk6fdp"><Whatsapp /> </a>
                    <a href="https://www.instagram.com/alcabarmix?igsh=bG9waTVyNzcyZHV3" target="_blank"><Instagram /></a>
                    <a href="#"><Tiktok /></a>
                </div>


            </div>



        </article>
    )
}

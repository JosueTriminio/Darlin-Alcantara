import React from 'react'

export default function Sobremi() {
    return (
        <section id='sobremi' className='flex flex-col justify-center items-center my-5'>
            <h2 className=' text-center text-3xl p-2' >Sobre Mi</h2>
            <article className='flex w-[68%] gap-6 md:gap-[5rem] flex-col md:flex-row p-5'>
                <div className='w-[15rem] h-[15rem] bg-[#dc143c] rounded-full'>
                    <img src="/img/darlin.png" alt="foto darlin barman" className='rounded-full w-[15rem] h-[15rem]' />
                </div>
                <p className='w-full md:w-1/2 md:text-xl'>Soy un chico amable y empático, siempre dispuesto a ayudar a los demás. Mis principios sólidos y mi honestidad me convierten en una persona confiable y respetada. Me esfuerzo por ser generoso e íntegro en todas mis acciones, buscando siempre el bienestar de quienes me rodean.
                    Disfruto de escuchar y apoyar a mis amigos y familiares, y trato de hacer una diferencia positiva en el mundo con cada oportunidad que tengo.</p>
            </article>
        </section>
    )
}

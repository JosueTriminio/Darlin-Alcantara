import Card from './Card';



export default function Gallery() {
    return (
        <section className='px-2' id="galeria">
            <h2 className={` text-3xl text-center p-14`}>Galeria</h2>
            <div className='flex justify-center gap-3'>
                <Card clase="/img/24.jpg" />
                <Card clase="/img/23.jpg" />
                <Card clase="/img/11.jpg" />
            </div>
        </section>
    )
}

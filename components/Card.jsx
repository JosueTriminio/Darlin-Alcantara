

export default function Card({clase}) {
  return (
    <div className={`border rounded-2xl`}>
        <img src={clase} alt="" className="rounded-2xl w-[8rem] h-[9rem] bg-cover object-cover"/>
    </div>
  )
}

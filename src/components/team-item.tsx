"use client"
import { FaAngleDown } from "react-icons/fa"

type TeamItemProps = {
  image: string,
  name: string,
  title: string,
  description: string
}

export function TeamItem({ image, name, title, description }: TeamItemProps) {

  //Open/close a Card element (change div height, clip text description, rotate arrow icon up/down, etc.).
  function handleClick(cardName: string) {
    const card = document.getElementById(`card-${cardName}`)
    if (card!.classList.contains("isClosed")) {
      // console.log(`open #${cardName}`)
      card!.classList.remove("isClosed", "h-72")
      document.getElementById(`description-${cardName}`)!.classList.remove("line-clamp-4")
      document.getElementById(`icon-${cardName}`)!.classList.add("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Menos"
    } else {
      // console.log(`close #${cardName}`)
      card!.classList.add("isClosed", "h-72")
      document.getElementById(`description-${cardName}`)!.classList.add("line-clamp-4")
      document.getElementById(`icon-${cardName}`)!.classList.remove("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Mais"
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-40 mobile_md:w-48 sm:w-56 shadow-xl rounded-xl relative">
      {/* Top half of card. Fixed height */}
      <div className="h-40 sm:h-48 bg-blue-dark rounded-t-xl">
        <img 
          src={image}
          className="w-full aspect-auto py-3 px-3"
          alt={`Membro da equipe: ${name}`}
          title={`Membro da equipe: ${name}`}
        />
      </div>

      {/* Bottom half of card. Hardcoded heigth when closed (72 = 18rem), omitted to be adaptable to content when opened */}
      <div 
        id={`card-${name}`}
        className="mt-12 px-3 h-72 pb-8 isClosed"
      >
        <p className="mt-20 text-xl font-bold">{name}</p>
        <p className="mt-0 text-sm text-gray-500">{title}</p>
        <p 
          id={`description-${name}`}
          className="mt-2 text-base leading-tight line-clamp-4"
        >
          {description}
        </p>

        <div 
          onClick={() => handleClick(name)}
          className="flex flex-row items-center absolute bottom-0 right-0 px-4 py-2 gap-1 cursor-pointer"
        >
          <FaAngleDown 
            id={`icon-${name}`} 
            className="size-6 fill-blue-dark"
          />
          <p 
            id={`label-${name}`} 
            className="text-right font-semibold text-blue-dark"
          >
            Mais
          </p>
        </div>
      </div>
    </div>
  )
}

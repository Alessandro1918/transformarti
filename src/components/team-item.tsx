"use client"
import { TeamItemProps } from "../requests/get-team"
import { FaAngleDown } from "react-icons/fa"

export function TeamItem({ image, name, title, description }: TeamItemProps) {

  function handleClick(cardName: string) {
    console.log(`open #${cardName}`)
    const card = document.getElementById(`card-${cardName}`)
    if (card!.classList.contains("isClosed")) {
      card!.classList.remove("isClosed", "h-44")
      document.getElementById(`description-${cardName}`)!.classList.remove("line-clamp-2")
      document.getElementById(`icon-${cardName}`)!.classList.add("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Menos"
    } else {
      card!.classList.add("isClosed", "h-44")
      document.getElementById(`description-${cardName}`)!.classList.add("line-clamp-2")
      document.getElementById(`icon-${cardName}`)!.classList.remove("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Mais"
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-48 sm:w-56 shadow-xl rounded-xl relative">
      <div className="h-32 sm:h-44 py-3 px-3 bg-blue-dark rounded-t-xl">
        <img 
          src={image}
          className=""
          alt={`Membro da equipe: ${name}`}
          title={`Membro da equipe: ${name}`}
        />
      </div>

      <div 
        id={`card-${name}`} //Not actually the entire "card", but the bottom half of it
        className="mt-9 px-3 h-44 pb-8 isClosed"
      >
        <p className="mt-4 text-xl font-bold">{name}</p>
        <p className="mt-0 text-sm text-gray-500">{title}</p>
        <p 
          id={`description-${name}`}
          className="mt-2 text-base leading-tight line-clamp-2"
        >
          {description}
        </p>

        <div 
          onClick={() => handleClick(name)}
          className="flex flex-row items-center absolute bottom-0 right-0 px-4 py-2 gap-1 cursor-pointer"
        >
          <FaAngleDown 
            id={`icon-${name}`} 
            className="size-6 fill-gray-500"
          />
          <p 
            id={`label-${name}`} 
            className="text-right"
          >
            Mais
          </p>
        </div>
      </div>
    </div>
  )
}

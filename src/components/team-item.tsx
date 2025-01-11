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
  //The Card is rendered as an item from an array, so each element has an id based on the element name/title.
  function handleClick(cardName: string) {
    const card = document.getElementById(`card-${cardName}`)
    if (card!.classList.contains("isClosed")) {
      console.log(`open #${cardName}`)
      card!.classList.remove("isClosed", "h-52")
      document.getElementById(`description-${cardName}`)!.classList.remove("line-clamp-4")
      document.getElementById(`icon-${cardName}`)!.classList.add("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Menos"
    } else {
      console.log(`close #${cardName}`)
      card!.classList.add("isClosed", "h-52")
      document.getElementById(`description-${cardName}`)!.classList.add("line-clamp-4")
      document.getElementById(`icon-${cardName}`)!.classList.remove("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Mais"
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-40 mobile_md:w-48 sm:w-56 shadow-xl rounded-xl relative">
      <div className="h-32 sm:h-44 py-3 px-3 bg-blue-dark rounded-t-xl">
        <img 
          src={image}
          className="w-full aspect-square"
          alt={`Membro da equipe: ${name}`}
          title={`Membro da equipe: ${name}`}
        />
      </div>

      <div 
        id={`card-${name}`} //Not actually the entire "card", just the bottom half of it (the "text part" of it)
        className="mt-9 px-3 h-52 pb-8 isClosed"
      >
        <p className="mt-4 text-xl font-bold">{name}</p>
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

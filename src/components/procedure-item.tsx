"use client"
import { FaAngleDown } from "react-icons/fa"

type ProcedureItemProps = {
  image: string
  title: string
  description: string
}

export function ProcedureItem({image, title, description}: ProcedureItemProps) {

  //Open/close a Card element (change div height, clip text description, rotate arrow icon up/down, etc.).
  //The Card is rendered as an item from an array, so each element has an id based on the element name/title.
  function handleClick(cardName: string) {
    const card = document.getElementById(`card-${cardName}`)
    if (card!.classList.contains("isClosed")) {
      console.log(`open #${cardName}`)
      card!.classList.remove("isClosed", "h-44")
      document.getElementById(`description-${cardName}`)!.classList.remove("line-clamp-4")
      document.getElementById(`icon-${cardName}`)!.classList.add("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Menos"
    } else {
      console.log(`close #${cardName}`)
      card!.classList.add("isClosed", "h-44")
      document.getElementById(`description-${cardName}`)!.classList.add("line-clamp-4")
      document.getElementById(`icon-${cardName}`)!.classList.remove("rotate-180")
      document.getElementById(`label-${cardName}`)!.innerHTML = "Mais"
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-40 mobile_md:w-44 sm:w-56 shadow-xl rounded-xl relative bg-white">
      <img 
        src={image}
        className="w-full aspect-video rounded-t-lg"
        alt={`Tratamento: ${title}`}
        title={`Tratamento: ${title}`}
      />

      <div 
        id={`card-${title}`} //Not actually the entire "card", just the bottom half of it (the "text part" of it)
        className="mt-4 px-3 h-44 pb-8 isClosed"
      >
        <p className="text-center font-bold">
          {title}
        </p>

        <p 
          id={`description-${title}`}
          className="mt-4 text-left text-base leading-tight line-clamp-4"
        >
          {description}
        </p>

        <div 
          onClick={() => handleClick(title)}
          className="flex flex-row items-center absolute bottom-0 right-0 px-4 py-2 gap-1 cursor-pointer"
        >
          <FaAngleDown 
            id={`icon-${title}`} 
            className="size-6 fill-blue-dark"
          />
          <p 
            id={`label-${title}`} 
            className="text-right font-semibold text-blue-dark"
          >
            Mais
          </p>
        </div>
      </div>
    </div>
  )
}

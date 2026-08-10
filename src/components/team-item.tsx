"use client"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

type TeamItemProps = {
  image: string,
  name: string,
  title: string,
  description: string
}

export function TeamItem({ image, name, title, description }: TeamItemProps) {

  const [ isClosed, setIsClosed ] = useState(true)

  return (
    <div className="flex flex-col justify-center items-center w-40 mobile_md:w-48 sm:w-56 shadow-xl rounded-xl relative">
      {/* Top half of card. Fixed height */}
      <div className="h-40 sm:h-48 bg-blue-dark rounded-t-xl">
        <img 
          src={image}
          className="w-full aspect-auto py-3 px-3"
          alt={`Membro da equipe: ${name}`}
          title={`${name}`}
        />
      </div>

      {/* Bottom half of card. Hardcoded heigth when closed (72 = 18rem), omitted to be adaptable to content when opened */}
      <div 
        className={`
          mt-12 px-4 pb-8 
          ${isClosed && "h-72"}
        `}
      >
        <p className="mt-20 text-xl font-bold text-black">{name}</p>
        <p className="mt-0 text-sm">{title}</p>
        <p 
          className={`
            mt-2 text-base leading-tight 
            ${isClosed && "line-clamp-4"}
          `}
        >
          {description}
        </p>

        <div 
          onClick={() => setIsClosed(!isClosed)}
          className="flex flex-row items-center absolute bottom-0 right-0 px-4 py-2 gap-1 cursor-pointer"
        >
          <FaAngleDown 
            className={`
              size-6 fill-blue-dark
              ${!isClosed && "rotate-180 transition duration-300"}
            `}
          />
          <p className="text-right font-semibold text-blue-dark">
            {isClosed ? "Mais" : "Menos"}
          </p>
        </div>
      </div>
    </div>
  )
}

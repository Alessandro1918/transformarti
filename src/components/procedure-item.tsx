"use client"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

type ProcedureItemProps = {
  image: string
  title: string
  description: string
}

export function ProcedureItem({image, title, description}: ProcedureItemProps) {

  const [ isClosed, setIsClosed ] = useState(true)

  return (
    <div className="flex flex-col justify-center items-center w-40 mobile_md:w-44 sm:w-56 shadow-xl rounded-xl relative bg-white">
      {/* Top half of card. Fixed height */}
      <img 
        src={image}
        className="w-full aspect-video rounded-t-lg"
        alt={`Tratamento: ${title}`}
        title={`Tratamento: ${title}`}
      />

      {/* Bottom half of card. Hardcoded heigth when closed (44 = 11rem), omitted to be adaptable to content when opened */}
      <div 
        className={`
          mt-4 px-3 pb-8
          ${isClosed && "h-44"}
        `}
      >
        <p className="text-black text-center font-bold">
          {title}
        </p>

        <p 
          className={`
            mt-4 text-base leading-tight 
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

import { TeamItemProps } from "../requests/get-team"

export function TeamItem({image, name, title}: TeamItemProps) {
  return (
    <div className="flex flex-col justify-center items-center w-44 sm:w-56 shadow-xl rounded-b-xl">
      <div className="h-32 sm:h-44 py-3 px-3 bg-blue-500 rounded-t-xl">
        <img 
          src={image}
          className=""
          alt={`Membro da equipe: ${name}`}
          title={`Membro da equipe: ${name}`}
        />
      </div>

      <div className="mt-9 h-32 px-3">
        <p className="mt-2 text-xl font-bold">{name}</p>
        <p className="mt-2 text-gray-600">{title}</p>
      </div>
    </div>
  )
}

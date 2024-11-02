import { TeamItemProps } from "../requests/get-team"

export function TeamItem({image, name, title}: TeamItemProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img 
        src={image}
        className="size-36 sm:size-48 rounded-full"
        alt={`Membro da equipe: ${name}`}
        title={`Membro da equipe: ${name}`}
      />
      <p className="mt-1 text-2xl font-bold">{name}</p>
      <p className="mt-2 text-base text-center h-12 max-w-36 sm:max-w-48">{title}</p>
    </div>
  )
}

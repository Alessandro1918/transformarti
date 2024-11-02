import { FaBars } from "react-icons/fa"

export function Header() {
  return (
    <div className="flex w-full h-16 items-center justify-between px-4 bg-blue-400">

      <div className="flex justify-center w-96">
        <p className="text-5xl text-blue-900">
          TransformArti
        </p>
      </div>

      <div className="flex flex-1 flex-row justify-center gap-4 max-sm:hidden">
        <p className="text-xl text-white font-bold">Equipe</p>
        <p className="text-xl text-white font-bold">Tratamentos</p>
      </div>

      <div className="sm:hidden">
        <FaBars className="size-6 fill-white"/>
      </div>
    </div>
  )
}

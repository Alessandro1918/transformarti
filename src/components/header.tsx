import { FaBars } from "react-icons/fa"

export function Header() {
  return (
    <div className="flex w-full h-32 items-center justify-between px-4 bg-blue-100">
      <img 
        src="/assets/logo.png"
        // className="w-80 sm:w-96"
        className="h-24"
      />

      <div className="flex flex-1 flex-row justify-center gap-4 max-sm:hidden">
        <p className="text-2xl text-blue-900">Equipe</p>
        <p className="text-2xl text-blue-900">Tratamentos</p>
      </div>

      <div className="sm:hidden">
        <FaBars className="size-6 fill-blue-900"/>
      </div>
    </div>
  )
}

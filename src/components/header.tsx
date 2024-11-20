import { FaBars } from "react-icons/fa"

export function Header() {
  return (
    <div className="flex w-full h-32 items-center justify-between px-4 bg-blue-light">
      <img 
        src="/assets/logo.png"
        // className="w-80 sm:w-96"
        className="h-24"
      />

      <div className="flex flex-1 flex-row justify-center gap-4 max-sm:hidden">
        <p className="text-2xl text-blue-dark">Tratamentos</p>
        <p className="text-2xl text-blue-dark">Equipe</p>
      </div>

      <div className="sm:hidden">
        <FaBars className="size-6 fill-blue-dark"/>
      </div>
    </div>
  )
}

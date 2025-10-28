"use client"
import { Link } from "react-scroll" //"to" prop: anchor; "href" prop: SEO track
// import { FaBars } from "react-icons/fa"

export function Header() {
  return (
    <div className="flex w-full h-32 items-center justify-center px-4 bg-blue-light">
      <img 
        src="/assets/logo.png"
        // className="w-80 sm:w-96"
        className="h-24"
      />

      {/* Top Header options: visible from "desktop" only */}
      <div className="flex flex-1 flex-row justify-center gap-4 max-sm:hidden">
        <Link to="about" href="#about" smooth duration={500}>
          <p className="cursor-pointer text-2xl text-blue-dark">Sobre</p>
        </Link>
        <Link to="procedures" href="#procedures" smooth duration={500}>
          <p className="cursor-pointer text-2xl text-blue-dark">Tratamentos</p>
        </Link>
        <Link to="team" href="#team" smooth duration={500}>
          <p className="cursor-pointer text-2xl text-blue-dark">Equipe</p>
        </Link>
      </div>

      {/* <div className="sm:hidden">
        <FaBars 
          id="open-sidebar-button"
          className="size-6 fill-blue-dark"
        />
      </div> */}

    </div>
  )
}

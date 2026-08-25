"use client"
import { Link } from "react-scroll" //"to" prop: anchor; "href" prop: SEO track

export function Header(props: { page: string }) {

  return (
    <header className="flex w-full h-32 items-center justify-center px-4 bg-blue-light">
      <h1 hidden>Transformarti Odontologia</h1>

      <img 
        src="/assets/logo.png"
        alt="transformarti logo"
        title="Transformarti Odontologia"
        // className="w-80 sm:w-96"
        className="h-24"
      />

      {/* Top Header options: visible from "desktop" only */}
      <div className="flex flex-1 flex-row justify-center gap-4 max-sm:hidden">
        {
          props.page == "/" && <>
            <Link to="about" href="#about" smooth duration={500}>
              <p className="cursor-pointer text-2xl text-blue-dark">Sobre</p>
            </Link>
            <Link to="procedures" href="#procedures" smooth duration={500}>
              <p className="cursor-pointer text-2xl text-blue-dark">Tratamentos</p>
            </Link>
            <Link to="team" href="#team" smooth duration={500}>
              <p className="cursor-pointer text-2xl text-blue-dark">Equipe</p>
            </Link>
          </>
        }

        {
          props.page == "/alinhadores" && <>
            <Link to="treatment" href="#treatment" smooth duration={500}>
              <p className="cursor-pointer text-2xl text-blue-dark">Tratamento</p>
            </Link>
            <Link to="faq" href="#faq" smooth duration={500}>
              <p className="cursor-pointer text-2xl text-blue-dark">FAQ</p>
            </Link>
            <Link to="alternatives" href="#alternatives" smooth duration={500}>
              <p className="cursor-pointer text-2xl text-blue-dark">Alternativas</p>
            </Link>
          </>
        }
      </div>
    </header>
  )
}

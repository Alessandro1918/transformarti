import { ProcedureItem } from "../components/procedure-item"
import { getProcedures } from "../requests/get-procedures"

export function Procedures() {

  const procedures = getProcedures()

  return (
    <div 
      id="procedures"
      className="bg-blue-light pb-8"
    >

      <div>
        <p className="pt-8 mt-12 px-4 text-5xl font-bold text-blue-dark opacity-20">
          Tratamentos
        </p>
        <p className="-mt-4 px-12 text-3xl font-bold text-blue-dark">
          Nossas Especialidades
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-start">
          {
            procedures.map((e, i) => {
              return (
                <ProcedureItem 
                  key={i}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

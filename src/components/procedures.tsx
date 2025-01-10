import { ProcedureItem } from "../components/procedure-item"
import { getProcedures } from "../requests/get-procedures"

export function Procedures() {

  const procedures = getProcedures()

  return (
    <div className="bg-blue-light pb-8">

      <div>
        <p className="pt-8 mt-12 px-8 text-7xl font-bold text-blue-dark opacity-20">
          Tratamentos
        </p>
        <p className="-mt-6 px-8 text-4xl font-bold text-blue-dark">
          Nossos Tratamentos
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-4 place-items-center">
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

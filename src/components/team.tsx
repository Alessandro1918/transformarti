import team from "@/app/data/team.json"
import { TeamItem } from "../components/team-item"

export function Team() {

  return (
    <section id="team">
      <div>
        <h2 className="mt-12 px-4 text-6xl font-bold font-montserrat text-blue-dark opacity-20">
          Equipe
        </h2>
        <p className="-mt-6 px-8 text-4xl font-bold font-montserrat text-blue-dark">
          Conheça nosso time
        </p>
      </div>

      <div className="mx-auto my-8">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-start">
          {
            team.map(( e, i ) => {
              return (
                <TeamItem 
                  key={i}
                  image={e.image}
                  name={e.name}
                  title={e.title}
                  description={e.description}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

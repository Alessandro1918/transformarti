import { TeamItem } from "../components/team-item"
import { getTeam } from "../requests/get-team"

export function Team() {

  const team = getTeam()

  return (
    <div id="team">

      <div>
        <p className="mt-12 px-4 text-6xl font-bold font-montserrat text-blue-dark opacity-20">
          Equipe
        </p>
        <p className="-mt-6 px-8 text-4xl font-bold font-montserrat text-blue-dark">
          Conheça nosso time
        </p>
      </div>

      <div className="mx-auto mt-8">
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
    </div>
  )
}

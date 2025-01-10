import { TeamItem } from "../components/team-item"
import { getTeam } from "../requests/get-team"

export function Team() {

  const team = getTeam()

  return (
    <div id="team">

      <div>
        <p className="mt-12 px-4 text-8xl font-bold text-blue-dark opacity-20">
          Equipe
        </p>
        <p className="-mt-6 px-4 text-5xl font-bold text-blue-dark">
          Conheça nosso time
        </p>
      </div>

      <div className="mx-auto mt-12">
        <div className="flex flex-wrap gap-5 sm:gap-4 justify-center items-start">
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

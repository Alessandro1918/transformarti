import { TeamItem } from "../components/team-item"
import { getTeam } from "../requests/get-team"

export function Team() {

  const team = getTeam()

  return (
    <div className="flex flex-col">
      <p className="mt-12 px-8 text-8xl font-bold text-blue-700 opacity-10">
        EQUIPE
      </p>
      <p className="-mt-6 px-8 text-2xl font-bold text-blue-700">
        Conheça nosso time
      </p>

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

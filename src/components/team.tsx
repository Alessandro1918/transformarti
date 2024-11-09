import { TeamItem } from "../components/team-item"
import { getTeam } from "../requests/get-team"

export function Team() {

  const team = getTeam()

  return (
    <div className="flex flex-col px-8">
      <p className="mt-12 text-8xl font-bold text-blue-700 opacity-10">
        EQUIPE
      </p>
      <p className="-mt-6 text-2xl font-bold text-blue-700">
        Conheça nosso time
      </p>

      <div className="mx-auto mt-12">
        <div className="flex flex-wrap gap-9 justify-center">
          {
            team.map(e => {
              return (
                <TeamItem 
                  key={e.name}
                  image={e.image}
                  name={e.name}
                  title={e.title}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

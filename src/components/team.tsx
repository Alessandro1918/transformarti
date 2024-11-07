import { TeamItem } from "../components/team-item"
import { getTeam } from "../requests/get-team"

export function Team() {

  const team = getTeam()

  return (
    <div className="flex flex-col">
      <p className="mt-12 text-center text-3xl font-extrabold">
        Equipe
      </p>
      <p className="mt-6 text-center text-base font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
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

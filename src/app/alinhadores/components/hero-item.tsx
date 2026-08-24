type HeroItemProps = {
  title: string,
  description: string
}

export function HeroItem(props: HeroItemProps) {
  return (
    <div className="gap-2 flex flex-col">
      <span className="text-md lg:text-3xl font-bold text-blue-dark">
        {props.title}
      </span>
      <span className="text-sm lg:text-base">
        {props.description}
      </span>
    </div>
  )
}

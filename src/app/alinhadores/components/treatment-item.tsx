export type TreatmentItemProps = {
  index: number,
  title: string,
  image: string,
  description: string
}

export function TreatmentItem(props: TreatmentItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-blue-light border border-blue-dark size-12 flex items-center justify-center rounded-full mx-auto">
        <span className="text-blue-dark text-xl font-semibold">
          {props.index}
        </span>
      </div>
      <img 
        src={props.image}
        className="w-full h-90 lg:h-52 object-cover"
      />
      <span className="text-blue-dark text-xl font-semibold">
        {props.title}
      </span>
      <p>
        {props.description}
      </p>
    </div>
  )
}

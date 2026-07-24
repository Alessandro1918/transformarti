export type TreatmentItemProps = {
  index: number,
  title: string,
  description: string
}

export function TreatmentItem(props: TreatmentItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-blue-light border border-blue-dark size-12 flex items-center justify-center rounded-full">
        <span className="text-blue-dark text-xl font-semibold">
          {props.index}
        </span>
      </div>
      <span className="text-blue-dark text-xl font-semibold">
        {props.title}
      </span>
      <p>
        {props.description}
      </p>
    </div>
  )
}

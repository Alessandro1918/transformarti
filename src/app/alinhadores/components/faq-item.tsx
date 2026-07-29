type FaqItemProps = {
  question: string,
  answer: string
}

export function FaqItem(props: FaqItemProps) {
  return (
    <div className="flex flex-col gap-4 items-start justify-center">
      <div className="bg-gray-200 w-full h-[2px]"/>
      <span className="text-blue-dark font-bold text-lg">
        {props.question}
      </span>
      <span>
        {props.answer}
      </span>
    </div>
  )
}

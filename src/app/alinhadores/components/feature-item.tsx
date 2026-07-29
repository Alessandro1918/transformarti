import { IconType } from "react-icons"

type FeatureItemProps = {
  icon: IconType,
  text: string,
  description: string
}

export function FeatureItem({ icon: Icon, text, description }: FeatureItemProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Icon className="text-blue-dark size-8"/>
      <div className="flex flex-col gap-2">
        <span className="text-blue-dark font-bold text-xl">{text}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}

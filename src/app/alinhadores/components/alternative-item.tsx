import { IconType } from "react-icons"
import { getWhatsappUrl } from "../../functions/get-whatsapp-url"

type AlternativeItemProps = {
  // icon: IconType,
  icon: string,
  title: string,
  description: string,
  buttonText: string,
  buttonMessage: string
}

// export function AlternativeItem({ icon: Icon, title, description, buttonText, buttonMessage }: AlternativeItemProps) {
export function AlternativeItem({ icon, title, description, buttonText, buttonMessage }: AlternativeItemProps) {
  return (
    <div className="flex flex-row gap-4 items-start justify-center">

      {/* <Icon className="text-blue-dark size-8"/> */}
      <img 
        src={icon}
        className="size-6"
      />

      <div className="flex flex-col gap-4">
        <span className="text-blue-dark font-bold text-lg">
          {title}
        </span>
        <span>
          {description}
        </span>
        <a 
          href={getWhatsappUrl(buttonMessage)}
          className="font-bold text-sm underline cursor-pointer"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}

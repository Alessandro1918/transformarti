import { FaWhatsapp } from "react-icons/fa"

export function Whatsapp() {
  const whatsappPhone = 5511965745577
  const whatsappText = 
`Boa tarde!
Vi o site de vocês, e gostaria de marcar uma consulta.`
  const whatsappEncodedText = encodeURIComponent(whatsappText)
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${whatsappEncodedText}`

  return (
    <a 
      href={whatsappUrl}
      className="bottom-16 right-4 fixed size-16 sm:size-20 rounded-full flex items-center justify-center bg-green-500"
    >
      <FaWhatsapp className="fill-white size-10 sm:size-14 pl-1"/>
    </a>
  )
}

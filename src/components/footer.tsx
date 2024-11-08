import { FaMapPin } from "react-icons/fa"
import { FaWaze } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Map } from "./map"

export function Footer() {

  const whatsappPhone = 5511965745577
  const whatsappText = 
`Boa tarde!
Vi o site de vocês, e gostaria de marcar uma consulta.`
  const whatsappEncodedText = encodeURIComponent(whatsappText)
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${whatsappEncodedText}`

  return (
    <div className="mt-4 flex flex-col sm:flex-row w-full gap-4 p-4 bg-blue-500">
      <img 
        src="/assets/logo.png"
        className="m-auto w-80 bg-white"
        // className="m-auto h-24 sm:h-48 bg-white"
      />

      <div className="flex flex-col gap-2 order-3 sm:order-2">
        <p className="text-white text-2xl font-semibold">
          Contato
        </p>

        <div 
          className="flex flex-row items-center gap-2"
        >
          <FaMapPin className="fill-white size-4"/>
          <p className="text-white font-medium">
            Cond. Pq da Cidade, Torre Tarumã
          </p>
        </div>
        
        <a 
          className="flex flex-row items-center gap-2"
          href="https://ul.waze.com/ul?place=ChIJf5TU9aBRzpQRrTc6nA9ET2M&ll=-23.62464400%2C-46.70242080&navigate=yes"
        >
          <FaWaze className="fill-white size-4"/>
          <p className="text-white font-medium">
            Av. das Nações Unidas, 14401
          </p>
        </a>

        <div className="flex flex-row items-center gap-2">
          <FaBuilding className="fill-white size-4"/>
          <p className="text-white font-medium">
            Sala 2806
          </p>
        </div>

        <a 
          className="flex flex-row items-center gap-2"
          href={`tel:${whatsappPhone}`}
        >
          <FaPhoneAlt className="fill-white size-4"/>
          <p className="text-white font-medium">
            {/* whatsappPhone, formated: */}
            (11) 96574-5577
          </p>
        </a>

        <a 
          className="flex flex-row items-center gap-2"
          href={whatsappUrl}
        >
          <FaWhatsapp className="fill-white size-4"/>
          <p className="text-white font-medium">
            {/* whatsappPhone, formated: */}
            (11) 96574-5577
          </p>
        </a>

        <a 
          className="flex flex-row items-center gap-2"
          href="https://www.instagram.com/transformartiodontologia/"
        >
          <FaInstagram className="fill-white size-4"/>
          <p className="text-white font-medium">
            @TransformArtiOdontologia
          </p>
        </a>
      </div>

      <div className="flex flex-col gap-2 h-48 sm:h-72 flex-1 order-2 sm:order-3">
        <p className="text-white text-2xl font-semibold">
          Localização
        </p>
        <Map />
      </div>
    </div>
  )
}

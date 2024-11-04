import { FaMapPin } from "react-icons/fa"
import { FaWaze } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export function Footer() {

  const whatsappPhone = 5511965745577
  const whatsappText = 
`Boa tarde!
Gostaria de marcar uma consulta.`
  const whatsappEncodedText = encodeURIComponent(whatsappText)
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${whatsappEncodedText}`

  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 p-4 bg-blue-500">
      <img 
        src="/assets/logo.png"
        className="max-sm:mx-auto h-36 sm:h-48 bg-white"
      />

      <div className="flex flex-col gap-2">
        <p className="text-white text-2xl font-semibold">
          Contato
        </p>

        <a 
          className="flex flex-row items-center gap-2"
          href="https://www.eztec.com.br/imovel/parque-da-cidade/complexo/"
        >
          <FaMapPin className="fill-white size-4"/>
          <p className="text-white font-medium">
            Cond. Pq da Cidade, Torre Tarumã
          </p>
        </a>
        
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
            (11) 9-6574-5577
          </p>
        </a>

        <a 
          className="flex flex-row items-center gap-2"
          href={whatsappUrl}
        >
          <FaWhatsapp className="fill-white size-4"/>
          <p className="text-white font-medium">
            {`wa.me/${whatsappPhone}`}
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
    </div>
  )
}

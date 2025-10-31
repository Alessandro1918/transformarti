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
    <div className="mt-4 flex flex-col items-center justify-center bg-blue-light">

      {/* 1: Contact info */}
      <div className="flex flex-col sm:flex-row w-full gap-4 p-4">

        {/* 1.1: Logo */}
        <img 
          src="/assets/logo.png"
          alt="transformarti logo"
          title="Transformarti Odontologia"
          className="m-auto w-80 rounded-xl"
          // className="m-auto h-24 sm:h-48 bg-white"
        />

        {/* 1.2: Map */}
        <div className="flex flex-col gap-2 h-48 sm:h-72 flex-1 order-2 sm:order-3">
          <p className="text-blue-dark text-2xl font-semibold">
            Localização
          </p>
          <Map />
        </div>

        {/* 1.3 Address / Contact Data */}
        <div className="flex flex-col gap-2 order-3 sm:order-2">
          <h2 className="text-blue-dark text-2xl font-semibold">
            Endereço
          </h2>

          <div 
            className="flex flex-row items-center gap-2"
          >
            <FaMapPin className="fill-blue-dark size-4"/>
            <p className="text-blue-dark font-medium">
              Cond. Parque da Cidade, Torre Tarumã
            </p>
          </div>
          
          <a 
            className="flex flex-row items-center gap-2"
            href="https://ul.waze.com/ul?place=ChIJf5TU9aBRzpQRrTc6nA9ET2M&ll=-23.62464400%2C-46.70242080&navigate=yes"
          >
            <FaWaze className="fill-blue-dark size-4"/>
            <p className="text-blue-dark font-medium">
              Av. das Nações Unidas, 14401
            </p>
          </a>

          <div className="flex flex-row items-center gap-2">
            <FaBuilding className="fill-blue-dark size-4"/>
            <p className="text-blue-dark font-medium">
              Sala 2806
            </p>
          </div>

          <h2 className="text-blue-dark text-2xl font-semibold mt-2">
            Contato
          </h2>

          <a 
            className="flex flex-row items-center gap-2"
            href={`tel:${whatsappPhone}`}
          >
            <FaPhoneAlt className="fill-blue-dark size-4"/>
            <p className="text-blue-dark font-medium">
              {/* whatsappPhone, formated: */}
              (11) 96574-5577
            </p>
          </a>

          <a 
            className="flex flex-row items-center gap-2"
            href={whatsappUrl}
          >
            <FaWhatsapp className="fill-blue-dark size-4"/>
            <p className="text-blue-dark font-medium">
              {/* whatsappPhone, formated: */}
              (11) 96574-5577
            </p>
          </a>

          <a 
            className="flex flex-row items-center gap-2"
            href="https://www.instagram.com/transformartiodontologia/"
          >
            <FaInstagram className="fill-blue-dark size-4"/>
            <p className="text-blue-dark font-medium">
              @transformartiodontologia
            </p>
          </a>
        </div>
      </div>

      {/* 2: My signature */}
      <div className="mb-2 flex flex-row gap-1">
        <p className="text-xs text-blue-dark">
          Design e desenvolvimento:
        </p>
        <a 
          className="text-xs font-semibold text-blue-dark"
          href="https://www.linkedin.com/in/alessandro-bentivegna-cesta-0058a785/"
        >
          Alessandro B. Cesta
        </a>
      </div>
    </div>
  )
}

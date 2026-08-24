import { getWhatsappUrl } from "../../functions/get-whatsapp-url"

export function Contact() {

  const telPhone = process.env.TEL_PHONE || "965745577"

  return (
    <section className="p-6 gap-8 w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="p-8 m-8 gap-8 w-full flex flex-col lg:flex-row items-center justify-center bg-blue-dark rounded-3xl">
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <h2 className="text-white text-3xl font-bold">
            Descubra se os alinhadores são para você
          </h2>
          <p className="text-gray-300 whitespace-pre-wrap lg:w-1/2">
            Agende uma avaliação, veja a simulação digital do seu sorriso e entenda o plano de tratamento antes de decidir.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <a 
            href={getWhatsappUrl(`Boa tarde!\nGostaria de agendar uma avaliação referente ao tratamento com alinhadores`)}
            className="p-4 pl-8 w-full lg:w-80 font-bold text-xl bg-blue-light hover:bg-white text-blue-dark border border-transparent transition-colors duration-300 rounded-full cursor-pointer"
          >
            Agendar pelo Whatsapp
          </a>
          <a 
            href={`tel:${telPhone}`}
            className="p-4 pl-8 w-full lg:w-80 font-bold text-xl bg-blue-dark hover:bg-sky-700  text-white border border-blue-light transition-colors duration-300 rounded-full cursor-pointer"
          >
            Agendar pelo Telefone
          </a>
        </div>
      </div>
    </section>
  )
}

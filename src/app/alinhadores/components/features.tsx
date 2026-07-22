import { IconType } from "react-icons"
import { FaEyeSlash, FaCheck, FaClockRotateLeft } from "react-icons/fa6"
import { TbRulerMeasure } from "react-icons/tb"

export function Features() {
  return (
    <section className="p-6 gap-16 w-full flex flex-col lg:flex-row items-center justify-center text-gray-500 bg-gray-50">
      <div className="w-full lg:w-1/3 max-w-[calc(1/3*1024px)] flex items-center justify-center">
        <img 
          src="/assets/alinhador-utilização.jpg"
          className="size-full aspect-auto object-cover rounded-3xl shadow-md shadow-gray-400"
        />
      </div>
      <div className="w-full lg:w-2/3 max-w-[calc(2/3*1024px)] gap-8 flex flex-col justify-between">
        <span className="text-blue-dark text-3xl">
          A forma mais discreta de alinhar os dentes
        </span>
        <p className="text-2xl">
          Os alinhadores são placas transparentes produzidas sob medida a partir do escaneamento do seu sorriso. Cada placa move os dentes um pouco mais até chegar à posição final planejada — com previsibilidade e conforto do início ao fim.
        </p>
        <div className="h-[1px] w-full bg-gray-300"/>
        <div className="gap-4 lg:gap-8 flex flex-col">
          <Topic
            icon={FaEyeSlash} 
            text="Quase imperceptível"
            description="Material transparente que passa despercebido em fotos, reuniões e no dia a dia."
          />
          <Topic
            icon={FaCheck} 
            text="Liberdade para comer de tudo"
            description="Basta remover a placa nas refeições — sem restrição alimentar como no aparelho fixo."
          />
          <Topic
            icon={FaClockRotateLeft} 
            text="Menos idas ao consultório"
            description="Trocas programadas em casa, com retornos mais espaçados para acompanhamento."
          />
          <Topic
            icon={TbRulerMeasure} 
            text="Resultado planejado desde o início"
            description="Simulação digital do sorriso final antes de começar o tratamento."
          />
        </div>
      </div>
    </section>
  )
}

type TopicProps = {
  icon: IconType,
  text: string,
  description: string
}

function Topic({ icon: Icon, text, description }: TopicProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Icon className="text-blue-dark size-8"/>
      <div className="flex flex-col gap-2">
        <span className="text-blue-dark text-xl font-bold">{text}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}

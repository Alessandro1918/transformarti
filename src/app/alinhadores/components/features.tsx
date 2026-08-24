import { FaEyeSlash, FaCheck, FaClockRotateLeft } from "react-icons/fa6"
import { TbRulerMeasure } from "react-icons/tb"
import { FeatureItem } from "./feature-item"

export function Features() {
  return (
    <section className="p-6 gap-16 w-full flex flex-col lg:flex-row items-center justify-center bg-blue-light">
      <div className="w-full lg:w-4/6 max-w-[calc(4/6*1024px)] flex items-center justify-center">
        <img 
          src="/assets/alinhador-utilização.jpg"
          className="size-full aspect-auto object-cover rounded-3xl shadow-md shadow-gray-400"
        />
      </div>
      <div className="w-full lg:w-5/6 max-w-[calc(5/6*1024px)] gap-8 flex flex-col justify-between">
        <h2 className="text-blue-dark text-3xl font-bold">
          A forma mais discreta de alinhar os dentes
        </h2>
        <p className="text-2xl text-justify">
          Os alinhadores são placas transparentes produzidas sob medida a partir do escaneamento do seu sorriso. Cada placa move os dentes um pouco mais até chegar à posição final planejada — com previsibilidade e conforto do início ao fim.
        </p>
        <div className="h-[1px] w-full bg-gray-300"/>
        <div className="gap-4 lg:gap-8 flex flex-col">
          <FeatureItem
            icon={FaEyeSlash} 
            text="Quase imperceptível"
            description="Material transparente que passa despercebido em fotos, reuniões e no dia a dia."
          />
          <FeatureItem
            icon={FaCheck} 
            text="Liberdade para comer de tudo"
            description="Basta remover a placa nas refeições — sem restrição alimentar como no aparelho fixo."
          />
          <FeatureItem
            icon={FaClockRotateLeft} 
            text="Menos idas ao consultório"
            description="Trocas programadas em casa, com retornos mais espaçados para acompanhamento."
          />
          <FeatureItem
            icon={TbRulerMeasure} 
            text="Resultado planejado desde o início"
            description="Simulação digital do sorriso final antes de começar o tratamento."
          />
        </div>
      </div>
    </section>
  )
}

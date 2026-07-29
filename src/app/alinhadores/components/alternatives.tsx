import { FaEyeSlash } from "react-icons/fa6"
import { AlternativeItem } from "./alternative-item"

export function Alternatives() {
  return (
    <section className="p-6 gap-8 w-full flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-blue-dark text-3xl font-bold">
        Outras alternativas
      </h2>

      <div className="gap-8 w-full lg:w-4/5 max-w-[calc(4/5*1024px)] flex flex-col items-center justify-center">
        <p className="self-start text-xl">
          Em alguns casos — principalmente infantis ou de maior complexidade — outras soluções podem ser mais indicadas. Nossa equipe avalia e recomenda o melhor caminho para você.
        </p>

        <div className="gap-4 lg:gap-8 flex flex-col lg:flex-row">
          <AlternativeItem
            icon="./assets/icons/aparelho-fixo.svg"
            title="Aparelhos fixos"
            description="Brackets colados aos dentes, indicados para correções mais complexas em qualquer idade."
            buttonText="Perguntar sobre fixos"
            buttonMessage={`Boa tarde!\nGostaria de mais informações sobre o tratamento com aparelhos fixos`}
          />
          <AlternativeItem
            icon="./assets/icons/aparelho-movel.svg"
            title="Aparelhos móveis"
            description="Placas removíveis voltadas para crianças em fase de crescimento e correções mais simples."
            buttonText="Perguntar sobre móveis"
            buttonMessage={`Boa tarde!\nGostaria de mais informações sobre o tratamento com aparelhos móveis`}
          />
        </div>      
      </div>
    </section>
  )
}

import steps from "../../../../public/alinhadores-tratamento.json"
import { TreatmentItem } from "./treatment-item"
import { TreatmentSlider } from "./treatment-slider"

export function Treatment() {
  return (
    <section className="p-6 gap-16 w-full flex flex-col items-center justify-center bg-gray-50">

      <span className="text-blue-dark text-3xl font-bold">
        Como funciona o tratamento
      </span>

      {/* Mobile (< lg): */}
      <div className="size-full visible lg:hidden">
        <TreatmentSlider steps={steps}/>
      </div>

      {/* Desktop (>= lg): */}
      <div className={`
        max-lg:hidden visible
        flex flex-row gap-4
        w-full px-8
      `}>
        {
          steps.map((e, i) => {
            return (
              <TreatmentItem key={i} {...e}/>
            )
          })
        }
      </div>
    </section>
  )
}

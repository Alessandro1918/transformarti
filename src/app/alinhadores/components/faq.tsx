import faqs from "@/app/data/alinhadores/faq.json"
import { FaqItem } from "./faq-item"

export function FAQ() {
  return (
    <section 
      id="faq"
      className="p-6 gap-8 w-full flex flex-col items-center justify-center bg-gray-50"
    >
      <h2 className="text-blue-dark text-3xl font-bold">
        Dúvidas Frequentes
      </h2>

      <div className="gap-12 lg:gap-16 flex flex-col lg:grid grid-cols-2 lg:w-2/3">
        {
          faqs.map(e => {
            return (
              <FaqItem key={e.question} {...e}/>
            )
          })
        }
      </div>
    </section>
  )
}

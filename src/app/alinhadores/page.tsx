import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Whatsapp } from "@/components/whatsapp"
import { Hero } from "./components/hero"
import { Features } from "./components/features"
import { Treatment } from "./components/treatment"
import { FAQ } from "./components/faq"
import { Alternatives } from "./components/alternatives"
import { Contact } from "./components/contact"

export const metadata: Metadata = {
  title: "Alinhadores | Transformarti Odontologia",
  description: "Os alinhadores são placas transparentes produzidas sob medida a partir do escaneamento do seu sorriso. Cada placa move os dentes um pouco mais até chegar à posição final planejada — com previsibilidade e conforto do início ao fim.",
  openGraph: {
    title: "Alinhadores | Transformarti Odontologia",
    description: "Os alinhadores são placas transparentes produzidas sob medida a partir do escaneamento do seu sorriso. Cada placa move os dentes um pouco mais até chegar à posição final planejada — com previsibilidade e conforto do início ao fim.",
    images: [{
      width: 560,
      height: 280,
      url: "/assets/alinhadores/opengraph-image.png",
    }],
  }
}

export default function Page() {
  return (
    <div>
      <Header page="/alinhadores"/>
      <Hero />
      <Features />
      <Treatment />
      <FAQ />
      <Alternatives />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  )
}

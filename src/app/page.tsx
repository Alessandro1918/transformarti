import type { Metadata, Viewport } from "next"
import { Header } from "../components/header"
import { Banner } from "../components/banner"
import { About } from "../components/about"
import { Procedures } from "../components/procedures"
import { Team } from "../components/team"
import { Footer } from "../components/footer"
import { Whatsapp } from "../components/whatsapp"

//Metadata images (favicon, icon, apple-icon) could be generated or path described. Instead, I just added the image files to the root of the "/app" folder.
//https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export const metadata: Metadata = {
  title: "Transformarti Odontologia",
  description: "Consultório odontológico no Condomínio Parque da Cidade, torre Tarumã, bairro Chácara Santo Antônio, próximo ao shopping Morumbi, shopping Market Place, e estação de trem Morumbi. Dentistas especialistas em procedimentos de restauração, ortodontia, cirurgia ortognática, implantes, próteses, endodontia, periodontia, clareamento dental e harmonização facial.",
  openGraph: {
    title: "Transformarti Odontologia",
    description: "Equipe de dentistas especialistas com foco em excelência e atendimento humanizado",
    images: [{
      url: "/assets/opengraph-image.png",
    }],
  }
}

export const viewport: Viewport = {
  themeColor: '#DBEAFE',  //blue-100 (light)
}

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Procedures />
      <Team />
      <Footer />
      <Whatsapp />
    </div>
  )
}

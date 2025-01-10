import { Header } from "../components/header"
import { Banner } from "../components/banner"
import { About } from "../components/about"
import { Procedures } from "../components/procedures"
import { Team } from "../components/team"
import { Footer } from "../components/footer"
import { Whatsapp } from "../components/whatsapp"

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

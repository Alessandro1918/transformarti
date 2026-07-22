import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Whatsapp } from "@/components/whatsapp"
import { Hero } from "./components/hero"

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
      <Whatsapp />
    </div>
  )
}

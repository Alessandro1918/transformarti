import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Whatsapp } from "@/components/whatsapp"
import { Hero } from "./components/hero"
import { Features } from "./components/features"

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
      <Whatsapp />
    </div>
  )
}

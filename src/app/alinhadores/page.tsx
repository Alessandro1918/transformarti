import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Whatsapp } from "@/components/whatsapp"
import { Hero } from "./components/hero"
import { Features } from "./components/features"
import { Treatment } from "./components/treatment"

export default function Page() {
  return (
    <div className="text-gray-500">
      <Header />
      <Hero />
      <Features />
      <Treatment />
      <Footer />
      <Whatsapp />
    </div>
  )
}

import { ImageSlider } from "../components/slider"
import { getClinic } from "../requests/get-clinic"

export function About() {

  const clinic = getClinic()

  return (
    <div>
      <ImageSlider 
        images={clinic}
      />
    </div>
  )
}

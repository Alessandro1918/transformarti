import { ImageSlider } from "../components/slider"
import { getClinic } from "../requests/get-clinic"

export function About() {

  const clinic = getClinic()

  return (
    <div id="about">

      <div>
        <p className="mt-12 px-4 text-6xl font-bold text-blue-dark opacity-20">
          Conheça
        </p>
        <p className="-mt-6 px-12 text-4xl font-bold text-blue-dark">
          a clínica
        </p>
      </div>

      <p className="px-4 whitespace-pre-line text-justify sm:text-center">
        {`
Fundada em 2018 pela Dra. Débora Cesta, a clínica conta com excelente localização, em uma das principais avenidas da zona sul de São Paulo, próxima à estação de trem Morumbi. 
Na clínica Transformarti Odontologia somos um time de especialistas dispostos a manter seu sorriso saudável e ainda mais bonito!
Nosso espaço foi elaborado para ser acolhedor e garantir que a sua experiência seja o mais agradável possível.
Aqui cada paciente é único, por isso oferecemos atendimento humanizado e tratamentos personalizados de acordo a necessidade individual de cada um.
        `}
      </p>

      <ImageSlider 
        images={clinic}
      />
    </div>
  )
}

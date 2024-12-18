import { ImageSlider } from "../components/slider"
import { getClinic } from "../requests/get-clinic"

export function About() {

  const clinic = getClinic()

  return (
    <div className="px-4 py-8">

      <div>
        <p className="text-3xl font-bold text-blue-dark">
          Conheça a
        </p>
        <img 
          src="/assets/logo.png"
          // className="w-80 sm:w-96"
          className="h-24"
        />
      </div>

      <p className="whitespace-pre-line text-justify sm:text-center">
        {`
Fundada em 2018 pela dra Débora Cesta a clínica conta com excelente localização, em uma das principais avenidas da zona sul de São Paulo, próxima à estação de trem Morumbi. 
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

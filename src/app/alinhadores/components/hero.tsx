export function Hero() {
  return (
    <section className="p-6 gap-16 w-full flex flex-col lg:flex-row items-center justify-center text-gray-500 bg-gray-50">
      <div className="w-full lg:w-2/3 max-w-[calc(2/3*1024px)] gap-4 flex flex-col order-2 lg:order-1 justify-between">
        <span className="text-blue-dark text-4xl">
          Alinhe seu sorriso de forma
          <span className="text-blue-medium italic">
            {" quase invisível"}
          </span>
        </span>
        <p className="text-2xl">
          Placas transparentes, removíveis e feitas sob medida para o seu sorriso. Sem metal, sem fio, sem abrir mão da rotina — só o resultado que você já imaginou.
        </p>
        <div className="h-[1px] w-full bg-gray-300"/>
        <div className="gap-4 lg:gap-16 flex flex-row">
          <Feature 
            title="Invisível"
            description="Discrição no dia a dia"
          />
          <Feature 
            title="Removível"
            description="Tire para comer e escovar"
          />
          <Feature 
            title="Sob medida"
            description="Plano digital individual"
          />
        </div>
      </div>
      <div className="relative w-full lg:w-1/3 max-w-[calc(1/3*1024px)] flex items-center justify-center order-1 lg:order-2 rounded-3xl bg-white drop-shadow-md shadow-gray-400">
        <img 
          src="/assets/alinhador.png"
          className="size-full aspect-square object-cover"
        />
        <ImageTag text="Troca a cada 1-2 semanas" className="top-4 -left-4" />
        <ImageTag text="Sem restrição alimentar" className="bottom-4 -right-4" />
      </div>
    </section>
  )
}

type FeatureProps = {
  title: string,
  description: string
}

function Feature(props: FeatureProps) {
  return (
    <div className="gap-2 flex flex-col">
      <span className="text-xl lg:text-3xl text-blue-dark">
        {props.title}
      </span>
      <span className="text-sm lg:text-base">
        {props.description}
      </span>
    </div>
  )
}

type ImageTagProps = {
  text: string,
  className: string
}

function ImageTag(props: ImageTagProps) {
  return (
    <div className={`absolute flex flex-row items-center gap-2 p-2 rounded-xl bg-white drop-shadow-md shadow-gray-400 ${props.className}`}>
      <div className="bg-blue-dark size-2 rounded-full"/>
      <span className="font-bold">
        {props.text}
      </span>
    </div>
  )
}

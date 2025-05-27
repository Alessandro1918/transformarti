export function Banner() {
  // Background V1: "bg-cover bg-center": static image, does not not have any hidden top/bottom overflow.
  // Background V2: "bg-attachment: fixed" locks the image position to the browser's viewport
  // (and since this position is related to the screen, I have to change the Y axys position depending on the device to keep it responsive).
  return (
    <div className={`
      bg-[url('/assets/banner.jpg')]
      w-full h-96 
      bg-fixed
      bg-cover bg-top
      sm:bg-cover sm:bg-center  
      relative flex items-center justify-center sm:justify-start
    `}>

      {/* opacity: */}
      {/* <div className="absolute size-full top-0 right-0 bg-black opacity-25"></div> */}

      <p className="z-10 text-white font-bold font-nunito_sans text-4xl sm:text-5xl w-3/4 sm:w-1/2 sm:px-8">
        Equipe de dentistas especialistas com foco em excelência e atendimento humanizado
      </p>
    </div>
  )
}
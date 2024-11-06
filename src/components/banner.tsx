export function Banner() {
  return (
    <div className={`
      relative 
      w-full h-96 flex items-center justify-center sm:justify-start
      bg-cover bg-center bg-[url('/assets/banner.jpg')]
    `}>

      {/* opacity: */}
      <div className="absolute size-full top-0 right-0 bg-black opacity-25"></div>

      <p className="z-10 text-5xl text-white font-bold w-3/4 sm:w-1/2 sm:px-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  )
}
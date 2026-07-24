"use client"
// from npm package "react-slick":
import Slider from "react-slick"
// from npm package "slick-carousel":
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { TreatmentItem, TreatmentItemProps } from "./treatment-item"
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export function TreatmentSlider(props: { steps: TreatmentItemProps[] }) {

  // function PrevArrow(props: any) {
  //   const { onClick } = props
  //   return (
  //     <button
  //       onClick={onClick}
  //       className="flex items-center justify-center cursor-pointer absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-lg size-6 bg-gray-600/50 text-white font-bold text-lg"
  //     >
  //       {/* {"<"} */}
  //       <FaAngleLeft className="size-5" />
  //     </button>
  //   )
  // }

  // function NextArrow(props: any) {
  //   const { onClick } = props
  //   return (
  //     <button
  //       onClick={onClick}
  //       className="flex items-center justify-center cursor-pointer absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-lg size-6 bg-gray-600/50 text-white font-bold text-lg"
  //     >
  //       {/* {">"} */}
  //       <FaAngleRight className="size-5" />
  //     </button>
  //   )
  // }

  function Dots() {
    return (
      <div className="mt-2 size-2 rounded-full bg-gray-400 hover:bg-gray-500 transition-colors duration-300" />
    )
  }

  function DotsArea(dots: number) {
    return (
      <div>
        <ul className="flex justify-center gap-2">
          {dots}
        </ul>
      </div>
    )
  }

  // extends dots section to color the active dot
  const dotsClassName = `
    slick-dots
    !flex justify-center gap-2 
    [&_.slick-active_div]:bg-blue-dark
    [&_.slick-active_div]:scale-125
  `

  return (
    <div className="w-full mb-2">
      <Slider 
        // arrows
        // prevArrow={<PrevArrow />}
        // nextArrow={<NextArrow />}
        dots
        customPaging={Dots}
        appendDots={DotsArea}
        dotsClass={dotsClassName}
        autoplay
        autoplaySpeed={3000}  // step time
        speed={500} // transition time
        slidesToShow={1}
      >
        {props.steps.map(e => (
          <TreatmentItem key={e.title} {...e}/>
        ))}
      </Slider>
    </div>
  )
}

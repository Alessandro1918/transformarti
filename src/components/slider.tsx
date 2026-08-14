"use client"
import { useState, useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"

//https://flowbite.com/docs/components/carousel/
export function ImageSlider(props: { images: any[] }) {

  const [ isDesktop, setIsDesktop ] = useState(false)

  // Any screen width equal or below the value hardcoded here is "mobile"
  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)")
    function update() {
      setIsDesktop(media.matches)
    }
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  function PrevArrow(props: any) {
    return (
      <button 
        // className={props.className}
        className="absolute z-10 left-0 top-1/2 -translate-y-6 flex items-center justify-center size-12 rounded-full bg-blue-medium opacity-100 hover:opacity-90"
        // style={props.style}
        onClick={props.onClick}
        aria-label="slider left arrow button"
      >
        <FaAngleLeft 
          className="fill-blue-dark size-4/5"
        />
      </button>
    )
  }

  function NextArrow(props: any) {
    // const { className, style, onClick } = props
    return (
      <button 
        // className={props.className}
        className="absolute z-10 right-1 top-1/2 -translate-y-6 flex items-center justify-center size-12 rounded-full bg-blue-medium opacity-100 hover:opacity-90"
        // style={props.style}
        aria-label="slider right arrow button"
        onClick={props.onClick}
      >
        <FaAngleRight 
          className="fill-blue-dark size-4/5"
        />
      </button>
    )
  }

  return (
    <Slider 
      arrows
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      dots
      infinite
      speed={500} // transition time
      slidesToShow={isDesktop? 4 : 1}
      slidesToScroll={1}
      centerMode
      responsive={[
        {
          // lg:
          // Largest responsive breakpoint. Copy this "slidesToShow" value to the Slider "slidesToShow" settings above
          breakpoint: 1024,
          settings: {slidesToShow: 4}
        }, {
          // md:
          breakpoint: 768,
          settings: {slidesToShow: 2}
        }, {
          // Largest breakpoint with same "slidesToShow" as "mobile".
          // Copy this value to the "useEffect" above
          // sm:
          breakpoint: 640,
          settings: {slidesToShow: 1}
        }
      ]}
      className="mt-8 px-4 w-full"
    >
      {
        props.images.map((e: any, i) => {
          return (
            <img
              key={i}
              className="px-2 aspect-square"
              src={e.image}
              alt={e.description}
              title={e.description}
            />
          )
        })
      }
    </Slider>
  )
}

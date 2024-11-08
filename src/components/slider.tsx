"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"

//https://flowbite.com/docs/components/carousel/
export function ImageSlider(props: { images: any[] }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  function PrevArrow(props: any) {
    return (
      <button 
        // className={props.className}
        className="absolute z-10 left-0 top-1/2 -translate-y-6 flex items-center justify-center size-12 rounded-full bg-blue-300 hover:bg-blue-200"
        // style={props.style}
        onClick={props.onClick}
      >
        <FaAngleLeft 
          className="fill-blue-600 size-8"
        />
      </button>
    )
  }

  function NextArrow(props: any) {
    // const { className, style, onClick } = props
    return (
      <button 
        // className={props.className}
        className="absolute z-10 right-1 top-1/2 -translate-y-6 flex items-center justify-center size-12 rounded-full bg-blue-300 hover:bg-blue-200"
        // style={props.style}
        onClick={props.onClick}
      >
        <FaAngleRight 
          className="fill-blue-600 size-4/5"
        />
      </button>
    )
  }

  return (
    <Slider 
      {...settings}
      className="mt-4 w-full"
    >
      {
        props.images.map((e: any, i) => {
          return (
            <img
              key={i}
              className="px-2 aspect-video"
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

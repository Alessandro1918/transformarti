"use client"
import { useEffect, useRef, useState } from "react"
import { setOptions, importLibrary } from "@googlemaps/js-api-loader"

export function Map() {

  const mapRef = useRef(null)
  const [ map, setMap ] = useState<google.maps.Map | null>(null)

  useEffect(() => {
    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    async function initializeMap() {
      try {
        const { Map } = await importLibrary("maps")
        const { AdvancedMarkerElement } = await importLibrary("marker")

        const center = { 
          lat: -23.62464400,
          lng: -46.70242080
        }

        const mapOptions = {
          center,
          zoom: 15.75,
          mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID // Required if you plan to use Advanced Markers. https://developers.google.com/maps/documentation/javascript/map-ids/get-map-id?hl=pt-br
        }

        if (mapRef.current && !map) {
          const newMap = new Map(mapRef.current, mapOptions)

          setMap(newMap)

          new AdvancedMarkerElement({
            map: newMap,
            position: center,
            // title: "Meu Marcador Padrão", // Texto exibido ao passar o mouse
          })
        }
      } catch (err) {
        console.error("Google Maps failed to load via js-api-loader:", err)
      }
    }

    initializeMap()
  }, [map])

  return (
    <div 
      ref={mapRef} 
      className="h-48 sm:h-72 bg-gray-400"
    />
  )
}

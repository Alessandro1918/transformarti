"use client"
import { useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export function Map() {

  useEffect(() => {

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY',
      version: "weekly",
      // libraries: ["maps"]
    })

    const mapOptions = {
      center: {
        lat: -23.62464400,
        lng: -46.70242080
      },
      zoom: 16
    }

    loader
      .load()
      // .importLibrary("maps")
      .then(google => {
        // Init the map
        const map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        )

        // Add a Marker 
        const marker = new google.maps.Marker({
          map: map,
          position: {
            lat: mapOptions.center.lat,
            lng: mapOptions.center.lng
          },
        })
      })
  }, [])

  return (
    <div 
      id="map"
      className="h-48 sm:h-72 bg-gray-400"
    />
  )
}

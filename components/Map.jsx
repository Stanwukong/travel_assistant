import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react"
import styles from "./Map.module.css"

function Map({}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={styles.mapContainer}
    ></GoogleMap>
  )
}

export default Map

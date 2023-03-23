import React, { useState } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react"
import styles from "./Map.module.css"

function Map({ coordinates, setCoordinates, setBounds}) {

  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    <GoogleMap
      zoom={10}
      center={coordinates}
      mapContainerClassName={styles.mapContainer}
      margin={[50, 50, 50, 50]}
      options={""}
      onBoundsChanged={(e) => {
      
      }}  
    ></GoogleMap>
  )
}

export default Map

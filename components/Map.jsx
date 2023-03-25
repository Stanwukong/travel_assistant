import React, { useState } from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useGoogleMap,
  Data,
} from "@react-google-maps/api"
import GoogleMapReact from "google-map-react"
import styles from "./Map.module.css"
import { Box } from "@chakra-ui/react"

function Map({ coordinates, setCoordinates, setBounds }) {
  const [map, setMap] = useState(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: isLoaded }}
        defaultZoom={10}
        center={coordinates}
        defaultCenter={coordinates}
        mapContainerClassName={styles.mapContainer}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
         }}
        onChildClick={() => {
          console.log("What's good ma G")
        }}
      ></GoogleMapReact>
    </Box>
  )
}

export default Map

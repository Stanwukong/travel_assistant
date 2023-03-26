import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import List from "../components/List"
import Map from "../components/Map"
import PlaceDetails from "../components/PlaceDetails"
import { getPlacesData } from "./api"
import Head from "next/head"



function Home() {

  const [places, setPlaces] = useState([]);

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({})

  const [bounds, setBounds] = useState(null)

  const [type, setType] = useState("restaurants")

  const [ratings, setRatings] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // get the users current location on initial load

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData)

  }, [ratings]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data)
      setIsLoading(false)

    })
  }, [type, coordinates, bounds])

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxHeight={"100vh"}
      position={"relative"}
    >

      <Head>
      <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLOF7XBFqFxjA1NUbERUj4xxTgs14kqiM&callback=initMap&libraries=places&v=weekly"
      defer
    ></script>
      </Head>
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      <List places={filteredPlaces.length ? filteredPlaces : places} isLoading={isLoading} />
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  )
}

export default Home

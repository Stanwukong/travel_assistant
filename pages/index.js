import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import List from "../components/List"
import Map from "../components/Map"
import PlaceDetails from "../components/PlaceDetails"
import { getPlacesData } from "./api"



function Home() {

  const [places, setPlaces] = useState([]);

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
    setIsLoading(true);
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data)
      setIsLoading(false)

    })
  }, [coordinates, bounds])

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      <List places={places} isLoading={isLoading} />
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
      />
    </Flex>
  )
}

export default Home

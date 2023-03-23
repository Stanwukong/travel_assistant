import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import List from "../components/List"
import Map from "../components/Map"
import PlaceDetails from "../components/PlaceDetails"
import { getPlacesData } from "./api"

const places = [
  { name: "Sample Place1" },
  { name: "Sample Place2" },
  { name: "Sample Place3" },
  { name: "Sample Place4" },
  { name: "Sample Place5" },
  { name: "Sample Place6" },
  { name: "Sample Place7" },
  { name: "Sample Place8" },
]

function Home() {
  const [coordinates, setCoordinates] = useState({})

  const [bounds, setBounds] = useState(null)

  const [type, setType] = useState("restaurants")

  const [ratings, setRatings] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // get the users current location on initial load

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data)
    })
  }, [])

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

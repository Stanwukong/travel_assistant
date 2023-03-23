import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import Header from "../components/Header"
import List from "../components/List"
import Map from "../components/Map"
import PlaceDetails from "../components/PlaceDetails"

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
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })

  const [type, setType] = useState("restaurants")

  const [ratings, setRatings] = useState("")

  const [isLoading, setIsLoading] = useState(false)

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
      <Map />
    </Flex>
  )
}

export default Home

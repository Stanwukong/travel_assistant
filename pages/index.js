import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import Header from "../components/Header"
import List from "../components/List"
import Map from "../components/Map"
import PlaceDetails from "../components/PlaceDetails"

function Home() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })

  const [type, setType] = useState("restutrants")

  const [ratings, setRatings] = useState("restutrants")

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxHeight={"100vh"}
      maxWidth={"100vh"}
      position={"relative"}
    >
      <Header setType={setType} setRatings={setRatings} setCoordinates={setCoordinates}/>

      <Map />
    </Flex>
  )
}

export default Home

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
import { Box, Image, Text } from "@chakra-ui/react"
import { IoLocation } from "react-icons/io5"
import { BiX } from "react-icons/bi"

function Map({ coordinates, setCoordinates, setBounds, places }) {


  const [isCard, setIsCard] = useState(false);
  const [cardData, setCardData] = useState(null);


  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultZoom={10}
        center={coordinates}
        defaultCenter={coordinates}
        mapContainerClassName={styles.mapContainer}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={() => {
          setCardData(places[child])
          setIsCard(true)
        }}
      >
        {places?.map((place, index) => (
          <Box lat={Number(place.latitude)} lng={Number(place.longitude)} position={'relative'} cursor="pointer" key={index}>
            <IoLocation color="red" fontSize={30}/>
          </Box>
        ))}

        {isCard && (
          <Box
            width={'200px'}
            height={'150px'}
            bg={'whiteAlpha.900'}
            position={'absolute'}
            top={-12}
            left={0}
            shadow={'lg'}
            rounded={'lg'}
          >
            <Image
          alt=""
          objectFit={"cover"}
          width={120}
          height={120}
          rounded={"lg"}
          src={
            cardData?.photo
              ? cardData?.photo?.images?.large?.url
              : "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          }
        />
         <Text
              textTransform={"capitalize"}
              width={40}
              fontSize={"lg"}
              fontWeight={500}
              isTruncated
            >
              {cardData?.name}
            </Text>
            <Box
              cursor={'pointer'}
              position={'absolute'}
              top={2}
              right={2}
              width={'full'}
              height={'30px'}
              bg={'red.300'}
              rounded={'full'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              onClick={() => {
                setIsCard(false)
              }}
            >
              <BiX fontSize={20}/>
            </Box>
          </Box>
        )}
      </GoogleMapReact>
    </Box>
  )
}

export default Map

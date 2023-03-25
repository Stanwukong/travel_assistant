import { Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

function PlaceDetails({ place }) {
  return (
    <Flex
      bg={"white.alpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"start"}
      justifyContent={"space-between"}
    >
      <Flex justifyContent={"space-between"} width={"full"}>
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width="full"
          px={2}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
          >
            <Text
              textTransform={"capitalize"}
              width={40}
              fontSize={"lg"}
              fontWeight={500}
              isTruncated
            >
              {place.name}
            </Text>
            <Text fontSize={'sm'} fontWeight={500} color={'gray.500'}>{place.price ? place.price : "No Price Uploaded" }</Text>
          </Flex>
        </Flex>
      </Flex>
      <Image 
        objectFit={'cover'}
        width={120}
        height={120}
        rounded={'lg'}
        src={
          place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
        }
      />
    </Flex>
  )
}

export default PlaceDetails

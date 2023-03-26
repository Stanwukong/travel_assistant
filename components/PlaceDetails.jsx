import { Badge, Flex, Image, Text } from "@chakra-ui/react"
import { Rating } from "@mui/material"
import React from "react"
import { IoLocation } from 'react-icons/io5'

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
            <Text fontSize={"sm"} fontWeight={500} color={"gray.500"}>
              {place.price}
            </Text>
          </Flex>
          {/* Ratings */}
          <Flex alignItems={"center"} width="full">
            {/* <Rating size="small" value={Number(place.rating)} readOnly /> */}
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
            >{`(${place.num_reviews})`}</Text>
            {/* <Text fontSize={'sm'} fontWeight={'500'} color={'gray.500'}>{place.price_level}</Text> */}
          </Flex>
          {/* Ranking */}
          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.400"}>
            {place.ranking}
          </Text>

          {/* Open Status */}
          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.600"}>
            {place.open_now_text}
          </Text>

          {/* Dietary Restrictions */}
          {
            place?.dietary_restrictions && (
              <Flex width={'full'} flexWrap={'wrap'}>
                {
                  place.dietary_restrictions.map((n, i) => (
                    <Badge colorScheme={'teal'} cursor={'pointer'} key={i} fontSize={10}>
                      {n.name}
                    </Badge>
                  ))
                }
              </Flex>
            )
          }
        </Flex>
        <Image
           alt=""
          objectFit={"cover"}
          width={120}
          height={120}
          rounded={"lg"}
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          }
        />
      </Flex>
      {
        place?.address && (
          <Flex alignItems={'center'} width={'full'} px={1} my={2}>
              <IoLocation fontSize={20} color='gray'/>
              <Text isTruncated
                fontSize={'small'}
                fontWeight={500}
                color={'gray.500'}
                ml={1}
              >
                {place.address}
              </Text>
          </Flex>
        )
      }
    </Flex>
  )
}

export default PlaceDetails

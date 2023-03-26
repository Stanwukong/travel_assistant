import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  theme,
} from "@chakra-ui/react"
import { Rating, ThemeProvider, Typography } from "@mui/material"
import { Autocomplete } from "@react-google-maps/api"
import React, { useState } from "react"
import {
  BiChevronDown,
  BiHotel,
  BiMapAlt,
  BiRestaurant,
  BiSearch,
  BiStar,
} from "react-icons/bi"

const Header = ({ setType, setRatings, setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null)

  function onLoad(autoC) {
    setAutoComplete(autoC)
  }

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat
    const lng = autoComplete.getPlace().geometry.location.lng
    setCoordinates({ lat, lng })
  }
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <InputGroup width={"35vw"} shadow="sm">
            <InputRightElement pointerEvents={"none"}>
              <BiSearch color="gray" fontSize={20} />
            </InputRightElement>
            <Input
              type={"text"}
              placeholder="Search Google Map..."
              variant={"filled"}
              fontSize={"18px"}
              bg={"white"}
              color={"gray.700"}
              _hover={{ bg: "whiteAlpha.800" }}
              _focus={{ bg: "whiteAlpha.800" }}
              _placeholder={{ color: "gray.700" }}
            />
          </InputGroup>
        </Autocomplete>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex
            align={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.200" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
          >
            <Menu>
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                Choose ratings
              </MenuButton>
              <MenuList>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                    All Ratings
                  </Text>
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setRatings(2)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    2.0
                  </Text>
                  {/* <Rating value={2} readOnly /> */}
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setRatings(3)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    3.0
                  </Text>
                  {/* <Rating value={3} readOnly /> */}
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setRatings(4)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4.0
                  </Text>
                  {/* <Rating value={4} readOnly /> */}
                </MenuItem>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setRatings(5)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4.5
                  </Text>
                  {/* <Rating value={5} readOnly /> */}
                </MenuItem>
              </MenuList>
            </Menu>
            <BiChevronDown fontSize={25} />
          </Flex>

          {/* Restaurants */}
          <Flex
            align={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.200" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("restaurants")}
          >
            <BiRestaurant size={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurants
            </Text>
          </Flex>

          {/* Hotels */}
          <Flex
            align={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.200" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("hotels")}
          >
            <BiHotel size={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hotels
            </Text>
          </Flex>

          {/* Attractions */}
          <Flex
            align={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.200" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("attractions")}
          >
            <BiMapAlt size={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Attractions
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header

import { Flex, Input, InputGroup, InputRightElement, Menu, MenuButton } from "@chakra-ui/react"
import { Autocomplete } from "@react-google-maps/api"
import React from "react"
import { BiSearch, BiStar } from "react-icons/bi"

const Header = ({ setType, setRatings, setCoordinates }) => {
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
        {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow="lg">
          <InputRightElement
            pointerEvents={"none"}
            children={<BiSearch color="gray" fontSize={20} />}
          />
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
        {/* </Autocomplete> */}
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex
            align={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
			rounded={'full'}
			ml={4}
			shadow="lg"
			cursor={'pointer'}
          >
			<Menu>
				<BiStar fontSize={25}/>
				<MenuButton mx={2} transition='all 0.2s' borderRadius={'md'}>Choose Ratings</MenuButton>
			</Menu>
		  </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header

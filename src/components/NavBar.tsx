import { HStack, Image, Text, Box } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack className="flex justify-between " padding="10px">
        <Box className="flex justify-center">
          <Image boxSize="64px" className="rounded-full" src={logo} />
          <Text
            whiteSpace={"nowrap"}
            className="text-xl font-bold text-[#00df9d] mt-[14px]"
          >
            Game Hub
          </Text>
        </Box>
        <SearchInput />
        <Box className="flex justify-center gap-4">
          <Text whiteSpace={"nowrap"} className="font-bold">
            {" "}
            Dark/Light Mode
          </Text>
          <ColorSwitch />
        </Box>
      </HStack>
    </div>
  );
};

export default NavBar;

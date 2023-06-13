import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Image boxSize="64px" className="rounded-full" src={logo} />
        <Text
          whiteSpace={"nowrap"}
          className="text-xl font-bold text-[#00df9d ]"
        >
          Game Hub
        </Text>

        <SearchInput />

        <Text whiteSpace={"nowrap"} className="font-bold">
          {" "}
          Dark/Light Mode
        </Text>
        <ColorSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;

import { HStack ,Image, Text} from "@chakra-ui/react";
import logo from "../assets/react.svg";


const NavBar = () => {
  return (
  <div>
<HStack>
    <Image boxSize='64px' src={logo}/>
    <Text>Game Hub</Text>
</HStack>
  </div>
  )
}

export default NavBar
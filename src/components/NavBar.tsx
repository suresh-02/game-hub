import { HStack ,Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorSwitch from "./ColorSwitch";


const NavBar = () => {
  return (
  <div>
<HStack>
    <Image boxSize='64px' src={logo}/>
  <ColorSwitch/>
</HStack>
  </div>
  )
}

export default NavBar
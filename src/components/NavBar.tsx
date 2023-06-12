import { HStack ,Image,Text} from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorSwitch from "./ColorSwitch";


const NavBar = () => {
  return (
  <div>
<HStack className="flex justify-between py-[11px] px-[60px]">
  <div className="flex items-center gap-[30px]">
    <Image boxSize='64px' className="rounded-full" src={logo}/>
    <Text className="text-2xl font-bold text-[#00df9d ]">Game Hub</Text>
    </div>
    <div className="flex justify-center gap-[20px]">
      <p className="font-bold" > Dark/Light Mode</p>
  <ColorSwitch/>
  </div>
</HStack>
  </div>
  )
}

export default NavBar
import { Platform } from "../Hooks/useGames"
import { HStack, Icon, Text } from "@chakra-ui/react"
import {
    FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid,
 } from "react-icons/fa";
 import { MdPhoneIphone } from 'react-icons/md';
 import { SiNintendo } from 'react-icons/si';
 import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";

interface props{
    platforms:Platform[];
}

const PlatformIconList = ({platforms}:props) => {

const iconMap:{[key:string]:IconType}={
    pc:FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    mac:FaApple,
    linux:FaLinux,
    andriod:FaAndroid,
    ios:MdPhoneIphone,
    nintendo:SiNintendo,
    web:BsGlobe
}

  return (
    <HStack className="py-[20px]" >
            {platforms.map((platform=><Icon as={iconMap[ platform.slug]} color='green.400'/>))}
            
    </HStack>
  )
}

export default PlatformIconList
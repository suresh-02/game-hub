import { Card ,CardBody,Image,Heading,HStack } from "@chakra-ui/react";
import { games } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import croppedImage from "../services.ts/image-url";

interface props {
    games:games,     
}


const GameCard = ({games}:props) => {
  return (
        <Card width='400px' overflow={"hidden"} borderRadius={10}  >
            <Image  src={croppedImage(games.background_image)}/>
            <CardBody>
                <Heading fontSize={'4xl'} >{games.name }</Heading>
                <HStack className="flex justify-between px-[10px]" >
                <PlatformIconList platforms={games.parent_platforms.map(p=>p.platform) }/>  
                <CriticScore score={games.metacritic} />  
                </HStack>
                            
            </CardBody>

        </Card>
  )
}

export default GameCard
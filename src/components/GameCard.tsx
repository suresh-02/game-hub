import { Card ,CardBody,Image,Heading,Text } from "@chakra-ui/react";
import { games } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface props {
    games:games,     
}


const GameCard = ({games}:props) => {
  return (
        <Card overflow={"hidden"} borderRadius={10}  >
            <Image  src={games.background_image}/>
            <CardBody>
                <Heading fontSize={'4xl'} >{games.name }</Heading>
                <PlatformIconList platforms={games.parent_platforms.map(p=>p.platform) }/>                
            </CardBody>

        </Card>
  )
}

export default GameCard
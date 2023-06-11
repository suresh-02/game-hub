import { Card ,CardBody,Image,Heading,Text } from "@chakra-ui/react";
import { games } from "../Hooks/useGames";

interface props {
    games:games,     
}


const GameCard = ({games}:props) => {
  return (
        <Card overflow={"hidden"} borderRadius={10}  >
            <Image  src={games.background_image}/>
            <CardBody>
                <Heading fontSize={'4xl'} >{games.name }</Heading>
            </CardBody>
        </Card>
  )
}

export default GameCard
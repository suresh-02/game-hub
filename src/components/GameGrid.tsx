
import { Text,SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkelton from "./LoadingSkelton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {

    const {data,error,isLoading} = useGames();
    const skeleton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

  return (
    // <>
    //     {error&& <Text>{error}</Text>}
    //     <SimpleGrid column={3} spacing={10} >
    //         {games?.map((game)=>(< key={game.id} game={game} GameCard/>))}
    //     </SimpleGrid>
    // </ >

<>
{error && <Text>{error}</Text>}
<SimpleGrid className="px-[10px]" columns={{
  md:3,
  sm:1,
  lg:4
}} spacing={10}>

{isLoading && skeleton.map(skeleton=> <GameCardContainer>
  <LoadingSkelton key={skeleton}/>
</GameCardContainer>)}
{data?.map((game) => (
  <GameCardContainer>
    <GameCard key={game.id} games={game} />
  </GameCardContainer>
  ))}
</SimpleGrid>
</>
    
  )
}

export default GameGrid
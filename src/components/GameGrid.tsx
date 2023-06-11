
import { Text,SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {

    const {games,error} = useGames();

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
{games?.map((game) => (
  <GameCard key={game.id} games={game} />
  ))}
</SimpleGrid>
</>
    
  )
}

export default GameGrid
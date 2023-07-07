import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../Hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkelton from "./LoadingSkelton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../Hooks/useGenres";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
  selectedGenre: Genres | null;
  selectedplatfrom: Platform | null;
}

const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  return (
    // <>
    //     {error&& <Text>{error}</Text>}
    //     <SimpleGrid column={3} spacing={10} >
    //         {games?.map((game)=>(< key={game.id} game={game} GameCard/>))}
    //     </SimpleGrid>
    // </ >

    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={2}
        columns={{
          lg: 4,
          md: 2,
          sm: 1,
        }}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkelton />
            </GameCardContainer>
          ))}

        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard games={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

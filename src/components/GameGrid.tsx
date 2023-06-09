import { useEffect, useState } from "react";
import apiClient from "../services.ts/api-client";
import { Text } from "@chakra-ui/react";

interface games{
    id:number,
    name:string
}

interface fetchGamesResponse {
    id:number,
    results:games[], 
}

const GameGrid = () => {

    const [games,setGames]=useState<games[]>();
    const [error,setError]=useState();

    useEffect(()=>{
        apiClient.get<fetchGamesResponse>('/games ')
        .then(res=>{
            return setGames(res.data.results);
            
        })
        .catch(err=>setError(err.message))
    });

  return (
    <>
        {error&& <Text>{error}</Text>}
        <ul>
            {games?.map(game=><li key={game.id}>{game.name}</li>)}
        </ul>
    </>
  )
}

export default GameGrid
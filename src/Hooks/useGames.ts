import { useEffect, useState } from "react";
import apiClient from "../services.ts/api-client";
import { CanceledError } from "axios";

export interface games{
    id:number,
    name:string,
    background_image:string
}

interface fetchGamesResponse {
    id:number,
    results:games[], 
}


const useGames = () => {

    const controller = new AbortController(); 

    const [games,setGames]=useState<games[]>();
    const [error,setError]=useState();

    useEffect(()=>{
        apiClient.get<fetchGamesResponse>('/games',{signal:controller.signal})
        .then(res=>{
            return setGames(res.data.results);  
            
        })
        .catch((err)=>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            return ()=>controller.abort();
        });
       
       },[] );

    return {games,error}
};

export default useGames
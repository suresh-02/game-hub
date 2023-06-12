import { useEffect, useState } from "react";
import apiClient from "../services.ts/api-client";
import { CanceledError } from "axios";

export interface Platform{
        id:number,name:string,slug:string
}

export interface games{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number
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
            // console.log(res.data.results[0].);
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
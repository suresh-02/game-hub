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
    const [isLoading , setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient
        .get<fetchGamesResponse>('/games',{signal:controller.signal})
        .then(res=>{
             setGames(res.data.results);
             setLoading(false)  
        })
        .catch((err)=>{
            if(err instanceof CanceledError) return;
            setLoading(false);
            setError(err.message);
        return ()=>controller.abort();

        });
       },[] );

    return {games,error,isLoading}
};

export default useGames
import { useEffect, useState } from "react";
import apiClient from "../services.ts/api-client";
import { CanceledError } from "axios";





interface genres{
id:number;
name:string
}

interface fetchGenresResponse{
    count:number;
    results:genres[]
}

export const useGenres = () =>{
    const controller = new AbortController(); 

    const [genres,setGenres]=useState<genres[]>();
    const [error,setError]=useState();
    const [isLoading , setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient
        .get<fetchGenresResponse>('/genres',{signal:controller.signal})
        .then(res=>{
            setGenres(res.data.results);
             setLoading(false)  
        })
        .catch((err)=>{
            if(err instanceof CanceledError) return;
            setLoading(false);
            setError(err.message);
        return ()=>controller.abort();

        });
       },[] );

    return {genres,error,isLoading}
}
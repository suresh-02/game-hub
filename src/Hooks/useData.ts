import { useEffect, useState } from "react";
import apiClient from "../services.ts/api-client";
import { CanceledError } from "axios";


interface fetchResponse<T>{
    count:number;
    results:T[]
}


export const useData = <T>( endpoint:string )=>{


    const controller = new AbortController(); 

    const [data,setData]=useState<T[]>();
    const [error,setError]=useState();
    const [isLoading , setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient
        .get<fetchResponse<T>>(endpoint,{signal:controller.signal})
        .then(res=>{
            setData(res.data.results);
             setLoading(false)  
        })
        .catch((err)=>{
            if(err instanceof CanceledError) return;
            setLoading(false);
            setError(err.message);
        return ()=>controller.abort();

        });
       },[] );

    return {data ,error,isLoading}

}
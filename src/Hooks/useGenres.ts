import { useData } from "./useData";





export interface genres{
id:number;
name:string
}


export const useGenres = () => useData<genres>('/genres');
   

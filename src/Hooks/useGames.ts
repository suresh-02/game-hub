import { useData } from "./useData";

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




const useGames = () => useData<games>('/games');

export default useGames
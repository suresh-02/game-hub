import { useData } from "./useData";
import { Genres } from "./useGenres";

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




const useGames = (selectedGenre:Genres|null,selectedplatfrom:Platform|null) => useData<games>('/games',{
    params:{genres:selectedGenre?.id,platforms:selectedplatfrom?.id}},
    [selectedGenre?.id,selectedplatfrom?.id ]
    );

export default useGames
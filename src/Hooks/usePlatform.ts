import { useData } from "./useData";


 interface platforms{
    id:number;
    name:string;
    slug:string;
}



export const  usePlatform = ()=>useData<platforms>('/platforms/lists/parents');
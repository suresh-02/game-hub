import { useData } from "../Hooks/useData";
import { genres } from "../Hooks/useGenres"


const GenresList = () => {
    const {data} = useData<genres>('/genres');
  return (
    <div>
        {data?.map(genre=><li>{genre.name}</li>)}
    </div>
  )
}

export default GenresList
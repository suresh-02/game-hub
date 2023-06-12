import { useGenres } from "../Hooks/useGenres"


const GenresList = () => {
    const {genres} = useGenres();
  return (
    <div>
        {genres?.map(genre=><li>{genre.name}</li>)}
    </div>
  )
}

export default GenresList
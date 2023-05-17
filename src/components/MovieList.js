import Movie from "./Movie"

const MovieList = ({movies}) => {
    const movieComponents = movies.map ((movie) => {
        return (
            <Movie key = {movie.id} name = {movie.name}  url = {movie.url}/>
        )
    })
    return (
        <div>
            {movieComponents}
        </div>
    )
}

export default MovieList
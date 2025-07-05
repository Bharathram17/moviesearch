
export const MovieDetail = ({movie}) => {
    return (
        <>
            {movie && (
                <div className="movie">
                    <img
                        src={movie.Poster}
                        alt={`${movie.Title} Poster`}
                        className="movie-poster"
                    />
                    <div className="movie-details">
            <h2>{movie.Title}</h2>
            <p>
                <strong>Year:</strong> {movie.Year}
            </p>
            <p>
                <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
                <strong>Director:</strong> {movie.Director}
            </p>
            <p>
                <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
                <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
                <strong>IMDb Rating:</strong> {movie.imdbRating}
            </p>
        </div>
                </div>
                
            )}
        </>
    )
}

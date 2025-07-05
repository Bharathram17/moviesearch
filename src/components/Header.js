import { useState } from 'react';

export const Header = ({ movie, setMovie }) => {

    const [error, setError] = useState("");
    const [query, setQuery] = useState("");

    const fetchMovie = async () => {
        const apiKey = "2e001151";
        const url = `https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response);
            const data = await response.json();
            console.log(data);
            console.log(data.response);
            if (data.Response === "True") {
                setMovie(data);
                setError("");
            } else {
                setMovie(null);
                setError(data.Error);
            }
        } catch (error) {
            console.error("Error fetching movie:", error);
            setError("An error occurred while fetching movie data.");
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovie();
    };

    return (
        <header className="App-header">
            <h1>Movie Search</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter movie title"
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p className="error">{error}</p>}

        </header>
    )
}

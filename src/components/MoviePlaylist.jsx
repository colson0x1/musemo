import { createRandomMovie } from '../data/index';

function MoviePlaylist() {
  // To Do:
  // Get list of movies
  const moviePlaylist = [];

  const handleMovieAdd = () => {
    // To Do:
    // Add movie to list of movies
  };

  const handleMovieRemove = () => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        ></button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;

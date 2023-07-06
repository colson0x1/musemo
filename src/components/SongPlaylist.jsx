import { createRandomSong } from '../data/index';

function SongPlaylist() {
  // To Do:
  // Get lists of songs:
  const songPlaylist = [];

  const handleSongAdd = () => {
    // To Do:
    // Add song to the list of songs
  };

  const handleSongRemove = () => {
    // To Do:
    /// Remove song from the list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;

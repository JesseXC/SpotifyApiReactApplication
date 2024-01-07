import React, { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi()

const Dashboard = ({spotifyToken}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [topSongs, setTopSongs] = useState([]);

  const getNowPLaying = () =>{
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log(response);
      setNowPlaying({
        name: response.item.name,
        albumArt: response.item.album.images[0].url
      })
    })
  }

  const getTopTracks = () =>{
    spotifyApi.getMyTopTracks().then((response) => {
      console.log(response);
      setTopSongs(
        response.items
      )
    })
  }

  const handleMenuItemClick = (item) => {
    setSelectedItem(item.name); // Set to the song's name
  };

  useEffect(() => {
    if(spotifyToken){
    console.log(spotifyToken)
    spotifyApi.setAccessToken(spotifyToken)
    spotifyApi.getMe().then((user) =>{
        console.log(user)
    }) 
    getTopTracks();
    }
  }, []);


  return (
    <div className="grid grid-cols-3 h-screen">
      {/* Left column - Menu */}
      <div className="col-span-1 overflow-y-auto">
        <div className="p-10">
        {topSongs.map((song, index) => (
            <div className="p-1">
              <div
                className="p-4 rounded-lg hover:bg-gray-200 hover:shadow-sm cursor-pointer"
                onClick={() => handleMenuItemClick(song)}
              >
                <h3>{index}</h3>
                <h2>Song: {song.name}</h2>
                <p>Artists: {song.artists.map((artist) => artist.name).join(', ')}</p>
                <p>Duration: {song.duration_ms} ms</p>
                <p>Popularity: {song.popularity}</p>
                <img src={song.album.images[0].url} alt={`Album art for ${song.name}`} />
          </div>
          </div>
        ))}
        </div>
      </div>

      {/* Right column - Content Display */}
      <div className="col-span-2 bg-gray-100 p-4">
      {selectedItem ? ( 
      <div>
      <h2>Song: {selectedItem}</h2>
      {/* Display additional details about the selected song here */}
      </div>
      ) : (
      <p>Select a song</p>
      )}
      </div>
    </div>
  );
};

export default Dashboard;
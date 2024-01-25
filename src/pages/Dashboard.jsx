import SpotifyWebApi from 'spotify-web-api-js';
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber"
import { useRef, useState, useEffect} from 'react'
import {MeshWobbleMaterial, OrbitControls, useHelper, Box, Text} from "@react-three/drei"
import { AmbientLight, DirectionalLight, DirectionalLightHelper, MeshBasicMaterial, MeshStandardMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Chest, SongBlock, Room} from '../components'
import { useSpring, animated } from "@react-spring/three"
import { useGesture } from '@use-gesture/react'

const spotifyApi = new SpotifyWebApi()
const intialPositions = [{position:[-1.4, 3.7, -.08],rotation:[0,0,Math.PI/6],active:false},{position: [-.58,4.55,-.08],rotation:[0,0,0],active:false},{position: [.62,4.55,-.08],rotation:[0,0,0],active:false},{position:[1.35, 3.8,-.08],rotation:[0,0,-Math.PI/6],active:false}];

const Dashboard = ({spotifyToken}) => {
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [selectedSongIds, setSelectedSongIds] = useState(new Set());
  const [cardPositions,setPositions] = useState(intialPositions);

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

  {/*const getRecommendation = (songs) => {
    const songIds = [];
    const trackIds = [];
    songs.forEach(song => {
      songIds.push(song.info.id);
      trackIds.push(song.info.artists[0].id);
    });
    spotifyApi.getRecommendations({ seed_tracks: trackIds, seed_artists: songIds }).then((response) => {
      console.log(response);
      setTopSongs(prevTopSongs => [...prevTopSongsresponse.item])
    });
  };
*/}

  const handleSongBlockClick = (songDict) =>{
    selectedSongIds.delete(songDict.info.id)
    setSelectedSongIds(selectedSongIds);
    setSelectedSongs(prevSongs => prevSongs.filter(songDictionary => songDictionary.info.id !== songDict.info.id) )
    setPositions(cardPositions => cardPositions.map((initialPosition, index) => {
      if (index === songDict.index) {
        return {position:cardPositions[index].position, rotation:cardPositions[index].rotation, active: false }; 
      } else {
        return initialPosition;
      }
    }));
  }

  const handleMenuItemClick = (song) => {
    const availablePositionIndex = cardPositions.findIndex(p => !p.active);
    console.log(availablePositionIndex);
    if (!selectedSongIds.has(song.id) && (availablePositionIndex != -1)) {
      setPositions(cardPositions => cardPositions.map((position, index) => {
        if (index === availablePositionIndex) {
          return {position:cardPositions[index].position, rotation:cardPositions[index].rotation, active: true }; 
        } else {
          console.log(position)
          return position;
        }
      }));
      setSelectedSongIds(prevIds => new Set(prevIds).add(song.id));
      setSelectedSongs(prevSongs => [...prevSongs, {info:song,index:availablePositionIndex, position: cardPositions[availablePositionIndex].position,rotation: cardPositions[availablePositionIndex].rotation}]);
    }
  };

  useEffect(() => {
    if(spotifyToken){
    console.log(spotifyToken)
    spotifyApi.setAccessToken(spotifyToken)
    spotifyApi.getMe().then((user) =>{
        console.log(user)
    }) 
    getTopTracks();
  {/*getRecommendation(); */}
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
      <div className="col-span-2 bg-gray-100">
    <Canvas camera={{ position: [0, 0, 20] }} style={{ flex: 3,width: '100%', height: '100vh'}}>
    <OrbitControls/>
    <Room/>
    <ambientLight/>
    <Chest position = {[0,0,0]}/>
    {selectedSongs && selectedSongs.map((songDict, index) => (
    <SongBlock
      key={index} // Consider using a unique key if available
      position={songDict.position} // Adjust position for each song block
      song={songDict.info}
      scale={[.33,.378,.5]}
      rotation={songDict.rotation}
      onClick={() => handleSongBlockClick(songDict)}
    />
    ))}
    </Canvas>
      </div>
    </div>
  );
};

export default Dashboard;
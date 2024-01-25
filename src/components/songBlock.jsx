import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber"
import { useRef, useState, useEffect} from 'react'
import {MeshWobbleMaterial, OrbitControls, useHelper, Box, Text, Image} from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"
import { useGesture } from '@use-gesture/react'

const SongBlock = ({position,scale,song, rotation, onClick}) => {
  return(
    <group position={position} scale={scale} rotation={rotation} onClick={onClick}>
      {/*Backround*/}
      <Box args={[2.94, 3.82, 0.42]} position ={[0.236, 2.529, 0.07]}>
        <meshStandardMaterial color ={"black"}/>
      </Box>
      {/*Song Image*/}
      <group>
      <Box args={[0.17, 1.925, 2.116]} position={[0.232, 2.814, 0.391]} rotation= {[0, Math.PI / 2, 0]}>
      <meshStandardMaterial color={"Grey"}/>
      </Box>
      <Image  url={song.album.images[0].url} scale={[2,1.825,1]} position = {[.232,2.814,.48]}/>
      </group>
      <group>
      {/*Logo*/}
      <Image url={"/spotifyLogo.jpg"} scale={[1,.3,1]} position={[-0.524, 4.111, 0.37]}/>
      <Box args={[1.08, 0.4, 0.2]} position={[-0.524, 4.111, 0.267]}>
        <meshStandardMaterial color={"blue"}/>
      </Box>
      </group>
      <Text anchorX={"left"} scale={[.18,.2,1]} position={[-.83,1.5,.4]}>{song.name}</Text>
      <Text maxWidth = {12.5} color = "grey" anchorX={"left"} scale={[.18,.2,1]} position={[-.83,1.15,.4]}>{song.artists.map((artist) => artist.name).join(', ')}</Text>
    </group>
  )
}

export default SongBlock 
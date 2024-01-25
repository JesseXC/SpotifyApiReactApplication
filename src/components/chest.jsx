import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {MeshWobbleMaterial, OrbitControls, useHelper, Box, Text} from "@react-three/drei"

export function Chest({position}) {
  const { nodes, materials } = useGLTF("/chest.gltf");
  return (
    <group dispose={null}>
      <group position={position}>
        <Box args={[1, 1.5, .5]} position={[-.50,5.5,0]}>
              <meshStandardMaterial color = {"red"} opacity={0.1} transparent/>
        </Box>
        <Box args={[1, 1.5, .5]} position={[.70,5.5,0]}>
              <meshStandardMaterial color = {"red"} opacity={0.1} transparent/>
        </Box>
        <Box args={[1, 1.5, .5]} position={[1.9,4.6,0]} rotation ={[0,0,-Math.PI/6]}>
              <meshStandardMaterial color = {"red"} opacity={0.1} transparent/>
        </Box>
        <Box args={[1, 1.5, .5]} position={[-1.8,4.6,0]} rotation ={[0,0,Math.PI/6]}>
              <meshStandardMaterial color = {"red"} opacity={0.1} transparent/>
        </Box>
        <group
          position={[.3, 3.59, .5]}
          rotation={[0, 4.4, 0]}
          scale={[0.014+.01, 0.014+.01, 0.014+.01]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.Material_0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chest.gltf");

export default Chest;
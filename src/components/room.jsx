import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room() {
  const { nodes, materials } = useGLTF("/room.gltf");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[-3.703, 0.184, 3.854]}
        scale={[14.995,7.995,7.995]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle_1.geometry}
        material={materials["Green Glass"]}
        position={[0.741, 3.071, -1.154]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Batten.geometry}
        material={materials.Wood}
        position={[-3.004, 0.293, -4.032]}
        scale={[15.4, 0.109, 0.109]}
      />
      <group
        position={[-0.959, 4.165, -0.895]}
        rotation={[0.017, 0.668, 2.593]}
        scale={[0.037, 0.009, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials.Pollen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_1.geometry}
          material={materials.Stems}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_2.geometry}
          material={materials.Petals}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vase.geometry}
        material={materials.Glass}
        position={[-1.089, 3.081, -0.712]}
        scale={[0.309, 0.207, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ashtray.geometry}
        material={materials.Ashtray}
        position={[1.34, 3.215, -0.402]}
        rotation={[-Math.PI, -0.904, -Math.PI]}
        scale={0.228}
      />
      <group
        position={[1.137, 3.44, -0.211]}
        rotation={[-3.14, -0.656, 1.667]}
        scale={0.017}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group position={[-1.613, -.7, -1.996]} scale={[0.859, 0.126, 0.859]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Dark Wood"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp.geometry}
        material={materials["Table Wood"]}
        position={[-1.613, 0.296, -1.996]}
        scale={[0.859, 0.086, 0.859]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={materials["Table Wood"]}
        position={[0, 2.826, 0]}
        rotation={[0, 0.472, 0]}
        scale={[1.879, 1.692, 1.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.Wall}
        position={[-3.703, 0.184, 3.854]}
        scale={[14.995,15.995,7.995]}
      />
    </group>
  );
}

useGLTF.preload("/room.gltf");
export default Room;
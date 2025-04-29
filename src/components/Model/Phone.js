import React, { useRef,useState } from 'react'
import { useGLTF ,useTexture} from '@react-three/drei'
import { useFrame ,useLoader} from '@react-three/fiber';
import * as THREE from 'three'

import img from '../../assests/Model/gamestack-list-large.jpg';

export default function Phone(props) {
  const { nodes, materials } = useGLTF('/iphone-11.glb')
  const group = useRef();
    const lid = useRef();
    const [hovered, setHovered] = useState(false);
  
    useFrame(({ mouse }) => {
      if (group.current) {
        group.current.rotation.y = mouse.x * 0.5;
        group.current.rotation.x = mouse.y * 0.3;
      }
      if (lid.current) {
        lid.current.rotation.x = hovered ? Math.PI / 2.5 : Math.PI / 10; // Open or close the lid
      }
    });
      const screenTexture = useLoader(THREE.TextureLoader, img)
      screenTexture.flipY = false
  return (
    <group 
        {...props} dispose={null}
        ref={group}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={0.6}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#2c3e50" />
        </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Logo.geometry} material={materials.Logo} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial map={screenTexture} toneMapped={false}/>
        </mesh>
    </group>
  )
}

useGLTF.preload('/iphone-11.glb')
import React, { useRef,useState,useEffect } from 'react'
import { useGLTF,useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame ,useLoader} from '@react-three/fiber';
import img from '../../assests/Model/volkihar-background-large.jpg';
export default function Laptop(props) {
  const { nodes, materials } = useGLTF('/macbook-pro.glb')
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
        position={[0, -0.5, 0]}
        scale={0.6} //parameter that i can change
    >
      <mesh castShadow receiveShadow geometry={nodes.Keyboard.geometry}  material={materials.Frame}>
        <mesh castShadow receiveShadow geometry={nodes.Body.geometry} material={materials.Frame} >
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Touchbar.geometry}
          material={materials.Frame}
        >
          <meshStandardMaterial color="#34495e" />
        </mesh>
        <meshStandardMaterial color="#1a252f" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        position={[0, -0.62, 0.047]}>
         
          
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo.geometry}
          material={materials.Logo}
          position={[0, 1.2, -0.106]}

        >
          <meshStandardMaterial color="#ecf0f1" />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0, 1.2, -0.106]}
          scale={[1.0, 1, 1]}
        >
        <meshStandardMaterial map={screenTexture} toneMapped={false}/>
        </mesh>
       
        <meshStandardMaterial color="#34495e" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/macbook-pro.glb')

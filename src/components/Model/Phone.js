import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

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
  return (
    <group 
        {...props} dispose={null}
        ref={group}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Logo.geometry} material={materials.Logo} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/iphone-11.glb')
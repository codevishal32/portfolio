import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

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
  return (
    <group 
        {...props} dispose={null}
        ref={group}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, -0.5, 0]}
    >
      <mesh castShadow receiveShadow geometry={nodes.Keyboard.geometry} material={materials.Frame}>
        <mesh castShadow receiveShadow geometry={nodes.Body.geometry} material={materials.Frame} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Touchbar.geometry}
          material={materials.Frame}
        />
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
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0, 1.2, -0.106]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/macbook-pro.glb')

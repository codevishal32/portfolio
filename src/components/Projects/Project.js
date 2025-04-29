// LaptopShowcaseFixed.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Laptop from '../Model/Laptop';
import Phone from '../Model/Phone';

export default function LaptopShowcaseFixed() {
  return (
    <div>

      <div style={{ width: '100%', height: '100vh', backgroundColor: '#e6e6e6' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}> 
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[30, 5, 5]} />
          <Laptop />
        </Canvas>
      </div>
      <div>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}> 
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 5, 5]} />
            <Phone />
          </Canvas>
      </div>
    </div>
  );
}

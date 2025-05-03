
import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

import './ModelCard.styles.css';
const  ModelCard =(props)=> {
  return (
    <div className='preview-model'>
        <div className='model' style={props.Styles} >
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}> 
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={2} />
                <directionalLight position={[10, 5, 5]} />
                {props.Model}
            </Canvas>
        </div>
        
    </div>
  )
}

export default ModelCard;
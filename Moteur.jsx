/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/moteur.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export function Moteur(props) {
  const { nodes, materials } = useGLTF('/moteur.glb')

  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust speed as needed
    }
  });

  return (
    <>
    <group {...props} dispose={null} scale={0.006} ref={groupRef}>
      <mesh geometry={nodes.Car_engine.geometry} material={nodes.Car_engine.material} />
    </group>
    <Html position={[ 8, 6, -5]}>
    <div  style={{ background: 'white', padding: '10px', borderRadius: '4px', fontSize: '12px', width:"290px", fontFamily:"Roboto Mono"}}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize:"15px", fontWeight:"bold", textAlign:"center", marginBottom:"5px"}}>  </span>
            <div style={{marginTop:"10px", marginBotom:"5px"}}>
            The combustion engine is the power-generating core of many vehicles, transforming fuel into mechanical energy. 
            It is made up of essential components like the cylinders, pistons, crankshaft, and spark plugs, all working together 
            to ignite fuel and move the vehicle. The combustion process occurs inside the cylinder chambers, where fuel is mixed with 
            air, compressed by the pistons, and ignited, creating energy.
            </div>
            <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius:"5px", marginTop:"10px" }}>
               <img src="/Moteur.png" alt="Rib" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{marginTop:"10px"}}>
              <p><strong>Function</strong>:The combustion engine is a power source transforming fuel into energy, made up of cylinders, pistons, 
              crankshaft, and spark plugs, igniting fuel-air mixtures in cylinder chambers to produce movement.</p>

            </div>
            </div>
    </div>

    </Html>
    </>
  )
}

useGLTF.preload('/moteur.glb')

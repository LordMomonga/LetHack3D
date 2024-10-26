import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Gaming = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: "gray" }} className="px-5">

      <Canvas>
        <OrbitControls />

        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} />

      </Canvas>

    </div>
  )
}

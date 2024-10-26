import { AiOutlineCheckCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import { TbListDetails } from "react-icons/tb"; 
import { FcRules } from "react-icons/fc"; 
import { AiFillAlipayCircle } from "react-icons/ai"; 
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GamingPerso } from '../../GamingPerso';
import { Link } from 'react-router-dom';

export const Gaming = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor:"gray"}} className="px-5">
           <nav>

           </nav>

           <div className="fixed z-10 top-[15%] py-5 bg-gray-600 text-gray-300 px-5  rounded-md">
        <h1 className="mt-2"><strong>Courses</strong>: Learning anatomy</h1>
        <h2 className="mt-5"><strong>Part 1</strong>: Human Skeleton</h2>
        <div className="mt-5"> 
        <button className="block bg-white text-gray-500  px-2 rounded-sm flex items-center gap-2 py-1"> 
        <TbListDetails />game instruction</button>
        <button className="block bg-white text-gray-500 mt-5 px-2 rounded-sm flex items-center gap-2 py-1"> <AiFillPlayCircle /> Start the Game </button>
     <Link to="/courses1"><button className="block text-gray-500 mt-5 px-2 rounded-sm bg-white flex items-center gap-2 py-1">  Return to the Courses</button></Link> 

        </div>
      </div>

      <div className="fixed z-10 top-[15%] py-5 bg-gray-600 text-gray-300 px-5 right-2 rounded-md">
        <div className="mt-5"> 
        <button className="block bg-white text-gray-500  px-2 rounded-sm flex items-center gap-2 py-1 w-[100px] "> 
        <AiOutlineCheckCircle />Plecsus</button>
        <button className="block bg-white text-gray-500 mt-5 px-2 rounded-sm flex items-center gap-2 py-1 w-[100px]"> <AiOutlineCheckCircle /> humerus </button>
      <button className="block text-gray-500 mt-5 px-2 rounded-sm bg-white flex items-center gap-2 py-1 w-[100px]"> <AiOutlineCheckCircle /> Radius</button>
      <button className="block text-gray-500 mt-5 px-2 rounded-sm bg-white flex items-center gap-2 py-1 w-[100px]"> <AiOutlineCheckCircle /> Spine</button>
      <button className="block text-gray-500 mt-5 px-2 rounded-sm bg-white flex items-center gap-2 py-1 w-[100px]"> <AiOutlineCheckCircle /> Tibia</button>
      <button className="block text-gray-500 mt-5 px-2 rounded-sm bg-white flex items-center gap-2 py-1 w-[100px]"> <AiOutlineCheckCircle /> Tronc</button>
      <button className="block text-gray-500 mt-5 px-2 rounded-sm bg-white flex items-center gap-2 py-1 w-[100px]"> <AiOutlineCheckCircle /> Ulna</button>


        </div>
      </div>
   
        <Canvas>

        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} />

        <mesh>
        
        <GamingPerso />
      </mesh>

        </Canvas>
        
    </div>
  )
}

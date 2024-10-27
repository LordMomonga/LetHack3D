import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { OrbitControls } from '@react-three/drei';
import { RxCross2 } from "react-icons/rx"; 
import { CgGames } from "react-icons/cg"; 
import { BiGame } from "react-icons/bi"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import { Moteur } from '../../Moteur';
import { ADN } from '../../ADN';
import { Book } from '../../Book';
import { Bookshelf } from '../../Bookshelf';

export const Courses6 = () => {

  return (

    <div style={{ width: '100vw', height: '100vh', backgroundColor:"gray"}} className="px-5">
    <div className="fixed z-10 top-[15%] py-5 bg-gray-600 text-gray-300 px-5  rounded-md">
 <h1 className="mt-2"><strong>Courses</strong>: History</h1>
 <h2 className="mt-5"><strong>Part 2</strong>: The 2nd world war</h2>
 <div className="mt-5"> 
 <Link to="/historyGame"><button className="block bg-blue-500 text-white  px-2 rounded-sm flex items-center gap-2 py-1"> <AiFillPlayCircle />
 Start a simulation</button></Link>
 <button className="block bg-white text-gray-500 mt-5 px-2 rounded-sm flex items-center gap-2 py-1"> <CgGames /> Start a Quizz</button>
<Link to="/"> <button className="block border-[2px] border-red-500 text-white mt-5 px-2 rounded-sm flex items-center gap-2 py-1"> <RxCross2 /> Quit the Courses</button></Link>  

 </div>
</div>
 <Canvas>
 <ambientLight intensity={0.5} />
 <pointLight position={[10, 10, 10]} intensity={1} />
 <directionalLight position={[-10, 10, 5]} intensity={0.5} />
 <OrbitControls />
 <mesh>
 
 <Bookshelf />
</mesh>
 </Canvas>
</div>
  )
}

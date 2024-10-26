import { RxCross2 } from "react-icons/rx"; 
import { CgGames } from "react-icons/cg"; 
import { BiGame } from "react-icons/bi"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Link } from "react-router-dom";

export const Courses1 = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor:"gray"}} className="px-5">
      <nav className="fixed top-0 z-10 px-[5%] py-5 ">
      <div className="font-bold   px-2 rounded-md text-2xl bg-white text-blue-500">
        ARISE
      </div>
      
      </nav>
      <div className="fixed z-10 top-[15%] py-5 bg-gray-600 text-gray-300 px-5  rounded-md">
        <h1 className="mt-2"><strong>Courses</strong>: Learning anatomy</h1>
        <h2 className="mt-5"><strong>Part 1</strong>: Human Skeleton</h2>
        <div className="mt-5"> 
        <button className="block bg-blue-500 text-white  px-2 rounded-sm flex items-center gap-2 py-1"> <AiFillPlayCircle />
        Start a simulation</button>
        <button className="block bg-white text-gray-500 mt-5 px-2 rounded-sm flex items-center gap-2 py-1"> <CgGames /> Start a Quizz</button>
     <Link to="/game"> <button className="block border-[2px] border-red-500 text-white mt-5 px-2 rounded-sm flex items-center gap-2 py-1"> <RxCross2 /> Quit the Courses</button></Link>  

        </div>
      </div>
      <Canvas className="z-0 " shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["gray"]} />
     
      <Experience />
    </Canvas> 
    </div>
  )
}

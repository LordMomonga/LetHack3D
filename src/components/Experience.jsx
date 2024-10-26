import { OrbitControls } from "@react-three/drei";
import { Squel } from "../../Squel";
export const Experience = () => {
  return (
    <>
            <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} />

      <OrbitControls />
      <mesh>
        
        <Squel />
      </mesh>
    </>
  );
};

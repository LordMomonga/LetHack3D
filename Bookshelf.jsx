/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/Bookshelf.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Html } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
export function Bookshelf(props) {
  const { nodes, materials } = useGLTF('/Bookshelf.glb')
const groupRef = useRef()

useFrame(() => {
  if (groupRef.current) {
    groupRef.current.rotation.y += 0.005; 

  }
});

  return (
    <>
    <group {...props} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.group966664866.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1048815158.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1702132102.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group633938376.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1793352265.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group2040108076.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group634255084.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1359852237.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1987144854.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group751481862.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group227914780.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1052635492.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group864707251.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group687955143.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1751088038.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group505671632.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group283918997.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group165613401.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group14247407.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1938683590.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group423249565.geometry} material={materials.mat21} />
      <mesh geometry={nodes.group802050906.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1003306018.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group875940139.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group552841683.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1357238172.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1138996592.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1331048207.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group752636525.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group1447785718.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1387497183.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group156460083.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group438200932.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group257976566.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group2006398532.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group1479453844.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1662040012.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group1484951833.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group752053113.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group937831915.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group225002350.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group905252152.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group59390808.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1692817625.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group256395068.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group611048843.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group1034316329.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group1994798792.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group250223753.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group286116515.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group13306777.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group2015271255.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1782243135.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group962457873.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group1019897031.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group2095556955.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group1011911227.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group15835575.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1017517075.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group1721710528.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group380733211.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group548630757.geometry} material={materials.mat18} />
      <mesh geometry={nodes.group728145106.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group1812224903.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1366047388.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group1838312899.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1972613599.geometry} material={materials.mat17} />
      <mesh geometry={nodes.group213039448.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1839125294.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1967720642.geometry} material={materials.mat21} />
      <mesh geometry={nodes.group1884002018.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group842451926.geometry} material={materials.mat22} />
      <mesh geometry={nodes.group1011320071.geometry} material={materials.mat19} />
      <mesh geometry={nodes.group935609718.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1699351704.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group370983626.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group192929773.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1220427099.geometry} material={materials.mat23} />
      <mesh geometry={nodes.group1370981756.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1497847545.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group238343898.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1849838348.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1798431221.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1277222791.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1146959302.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1632347617.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group633143504.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1269888978.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group1573889920.geometry} material={materials.mat20} />
      <mesh geometry={nodes.group93335299.geometry} material={materials.mat20} />
      <mesh geometry={nodes.mesh1140854425.geometry} material={materials.mat20} />
      <mesh geometry={nodes.mesh1140854425_1.geometry} material={materials.mat23} />
      <mesh geometry={nodes.mesh1140854425_2.geometry} material={materials.mat22} />
      <mesh geometry={nodes.mesh1140854425_3.geometry} material={materials.mat19} />
      <mesh geometry={nodes.mesh1140854425_4.geometry} material={materials.mat18} />
      <mesh geometry={nodes.mesh1140854425_5.geometry} material={materials.mat17} />
      <mesh geometry={nodes.mesh1140854425_6.geometry} material={materials.mat21} />
      <mesh geometry={nodes.mesh742438179.geometry} material={materials.mat21} />
      <mesh geometry={nodes.mesh742438179_1.geometry} material={materials.mat18} />
      <mesh geometry={nodes.mesh742438179_2.geometry} material={materials.mat19} />
      <mesh geometry={nodes.mesh742438179_3.geometry} material={materials.mat17} />
      <mesh geometry={nodes.mesh742438179_4.geometry} material={materials.mat23} />
      <mesh geometry={nodes.mesh742438179_5.geometry} material={materials.mat22} />
      <mesh geometry={nodes.mesh742438179_6.geometry} material={materials.mat20} />
    </group>
    
    <Html position={[ 8, 6, -5]}>
    <div  style={{ background: 'white', padding: '10px', borderRadius: '4px', fontSize: '12px', width:"300px", fontFamily:"Roboto Mono"}}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize:"15px", fontWeight:"bold", textAlign:"center", marginBottom:"5px"}}>  </span>
            <div style={{marginTop:"10px", marginBotom:"5px"}}>
           
La Seconde Guerre mondiale (1939-1945) fut un conflit global dévastateur opposant les forces de l'Axe (Allemagne, Italie, Japon) aux Alliés
 (États-Unis, Royaume-Uni, URSS, France). Elle débute avec l’invasion de la Pologne par l’Allemagne, déclenchant une chaîne d’événements 
 militaires majeurs. Le conflit prend une ampleur mondiale avec l'attaque de Pearl Harbor, et des batailles décisives comme Stalingrad et le 
 débarquement de Normandie changent le cours de la guerre. En 1945, la défaite de l'Axe met fin à des années de violence, redéfinissant les frontières
  et installant de nouvelles tensions mondiales qui mèneront à la Guerre froide
            </div>
            <div style={{ width: '250px', height: '200px', overflow: 'hidden', borderRadius:"5px", marginTop:"10px" }}>
               <img src="/gMonde.jpeg" alt="Rib" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{marginTop:"10px"}}>
            

            </div>
            </div>
    </div>

    </Html>
    </>
  )
}

useGLTF.preload('/Bookshelf.glb')

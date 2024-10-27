import React from 'react'
import { Unity } from 'react-unity-webgl'
import { useUnityContext } from 'react-unity-webgl'

export const Gistory = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Game/Downloads.loader.js",
        dataUrl: "/Game/Build/Downloads.data.br",
        frameworkUrl: "/Game/Build/Downloads.framework.js.br",
        codeUrl: "/Game/Build/Downloads.wasm.br",
      });
    
  return  <><Unity 
  className='w-[100vw] h-[100vh]'
  unityProvider={unityProvider} />;
  
  </>
}

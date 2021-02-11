import { useGLTF } from '@react-three/drei';
// import React, { useEffect } from 'react';
import React from 'react';

const Chair = () => {
  const { scene } = useGLTF('/3d/chair/scene.gltf', true);

  // useEffect(() => {
  //   console.log('Here');
  //   const handleOutsideClick = (event) => {
  //     console.log(event);
  //   };
  //
  //   document.addEventListener('scroll', handleOutsideClick);
  //
  //   return () => {
  //     console.log('Removed');
  //     document.removeEventListener('scroll', handleOutsideClick);
  //   };
  // }, []);

  return (
    <primitive
      onClick={() => console.log('A')}
      object={scene}
      dispose={null}
    />
  );
};

export default Chair;

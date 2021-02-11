// import * as THREE from 'three';
// import React, { useEffect, useRef } from 'react';
// // import { DRACOLoader, GLTFLoader } from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
//
// const Three = () => {
//   const ref = useRef();
//
//   useEffect(() => {
//     if (ref && ref.current) {
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000,
//       );
//       //
//       const renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       ref.current.appendChild(renderer.domElement);
//       //
//       // const geometry = new THREE.BoxGeometry(5, 1, 1);
//       // const material = new THREE.MeshBasicMaterial({ color: 'red' });
//       // const cube = new THREE.Mesh(geometry, material);
//       // scene.add(cube);
//       //
//       // camera.position.z = 5;
//       //
//       const animate = () => {
//         requestAnimationFrame(animate);
//
//         // cube.rotation.x += 0.01;
//         // cube.rotation.y += 0.01;
//
//         renderer.render(scene, camera);
//       };
//
//       // console.log(cube.rotation.x);
//       // cube.rotation.x = 1;
//       // renderer.render(scene, camera);
//
//       // var animate = function () {
//       //   requestAnimationFrame( animate );
//       //   renderer.render( scene, camera );
//       // };
//
//       // Instantiate a loader
//       const loader = new GLTFLoader();
//
//       // Optional: Provide a DRACOLoader instance to decode compressed mesh data
//       const dracoLoader = new DRACOLoader();
//       dracoLoader.setDecoderPath('/examples/js/libs/draco/');
//       loader.setDRACOLoader(dracoLoader);
//       loader.load(
//         // resource URL
//         '/3d/chair/scene.gltf',
//         // called when the resource is loaded
//         (gltf) => {
//           console.log('Loaded');
//           scene.add(gltf.scene);
//           gltf.animations; // Array<THREE.AnimationClip>
//           gltf.scene; // THREE.Group
//           gltf.scenes; // Array<THREE.Group>
//           gltf.cameras; // Array<THREE.Camera>
//           gltf.asset; // Object
//         },
//         // called while loading is progressing
//         (xhr) => {
//           console.log(xhr);
//           console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
//         },
//         // called when loading has errors
//         () => {
//           console.log('Error');
//           // console.log('An error happened');
//         },
//       );
//       console.log(scene);
//       animate();
//     }
//   }, [ref]);
//
//   return (
//     <div ref={ref} />
//   );
// };
//
// export default Three;
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import JSONfont from 'three/examples/fonts/helvetiker_regular.typeface.json';
import Room from './Room';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls, Html } from 'drei';

// eslint-disable-next-line react/prop-types
// function Model({ url }) {
//   const { scene } = useLoader(GLTFLoader, url);
//   return <primitive object={scene} dispose={null} />;
// }

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    // eslint-disable-next-line no-multi-assign
    // mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh
      castShadow
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

// function Camera(props) {
//   const ref = useRef();
//   const { setDefaultCamera } = useThree();
//   // eslint-disable-next-line no-void
//   useEffect(() => void setDefaultCamera(ref.current), []);
//   useFrame(() => ref.current.updateMatrixWorld());
//   // eslint-disable-next-line react/jsx-no-undef
//   return <a.perspectiveCamera ref={ref} {...props} />;
// }

export default function Three() {
  const font = new THREE.Font(JSONfont);
  const textOptions = {
    font,
    size: 5,
    height: 0,
  };

  return (

    <Canvas shadowMap style={{ height: '100vh' }} camera={{ position: [0, 0, 10], fov: 90 }} colorManagement>
      <ambientLight intensity={0.5} position={[0, 10, 0]} />
      <spotLight position={[0, 1, 0]} angle={0.15} penumbra={1} intensity={1} />
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadowMapWidth={1024}
        shadowMapHeight={1024}
        shadowCameraFar={50}
        shadowCameraLeft={10}
        shadowCameraTop={10}
        shadowCameraBottom={-10}
        shadowCameraRight={10}
      />
      {/* <Box position={[-1.2, 0, 0]} /> */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeBufferGeometry attach="geometry" args={[2000, 2000]} />
        <shadowMaterial attach="material" opacity={0.5} color="green" />
      </mesh>
      <mesh position={[5, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <textGeometry attach="geometry" args={['Marco', textOptions]} />
        <meshBasicMaterial attach="material" color="yellow" />
      </mesh>
      <Suspense fallback={null}>
        <Room />
      </Suspense>
      <Box position={[0, 1, 0]} />
      <OrbitControls />
      {/* <Chair /> */}
    </Canvas>
  );
}

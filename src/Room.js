import React from 'react';
import { useGLTF } from '@react-three/drei';

const Room = () => {
  // const ref = useRef();
  // const snap = useProxy(state);
  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  console.log('AA');

  const { nodes, materials, scene } = useGLTF('3d/room2/scene.gltf');

  // const { nodes, materials } = scene;
  // const nodes = [];
  // const materials = [];
  console.log(nodes, materials, scene);
  //
  // // Animate model
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
  //   ref.current.rotation.x = Math.cos(t / 4) / 8;
  //   ref.current.rotation.y = Math.sin(t / 4) / 8;
  //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });
  //
  // // Cursor showing current color
  // const [hovered, set] = useState(null);
  // useEffect(() => {
  //   // const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
  //   // const auto = '<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>';
  //   // document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`;
  // }, [hovered]);

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group>
      {Object.values(nodes).filter((node) => node.geometry).map((node) => (
        <mesh geometry={node.geometry} material={node.material} material-color={node.userData.name === 'Cube.002_UberTexture_0' && 'green'} />
      ))}
    </group>
    // <primitive object={scene} position={[0, 2, 0]} />
  );
};

export default Room;

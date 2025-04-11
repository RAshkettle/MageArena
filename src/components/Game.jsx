import { useFBX, useGLTF } from "@react-three/drei";

export const Game = () => {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='blue' />
      </mesh>
      <ambientLight intensity={1} />
    </>
  );
};

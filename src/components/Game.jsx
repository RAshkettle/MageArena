import { useFBX, useGLTF } from "@react-three/drei";
import Ground from "./ground";

export const Game = () => {
  return (
    <>
      <Ground />
      <ambientLight intensity={1} />
    </>
  );
};

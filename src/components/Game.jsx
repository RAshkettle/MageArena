import { useFBX, useGLTF } from "@react-three/drei";
import Ground from "./ground";
import Player from "./Player";

export const Game = () => {
  return (
    <>
      <Player />
      <Ground />
      <ambientLight intensity={1} />
    </>
  );
};

/**
 * @module Game
 * @description Main game component that assembles all game elements
 */
import { useFBX, useGLTF } from "@react-three/drei";
import Ground from "./ground";
import Player from "./Player";

/**
 * Main Game component that serves as the container for all game elements
 *
 * @returns {JSX.Element} The assembled game scene
 */
export const Game = () => {
  return (
    <>
      {/* Player character with animations */}
      <Player />

      {/* Ground surface with cobblestone texture */}
      <Ground />

      {/* Basic ambient lighting for the scene */}
      <ambientLight intensity={1} />
    </>
  );
};

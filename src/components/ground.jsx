/**
 * @module Ground
 * @description Component that renders the ground plane with a cobblestone texture
 */
import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

/**
 * Ground component that renders a textured plane as the floor of the game environment
 *
 * @returns {JSX.Element} The ground mesh component
 */
const Ground = () => {
  /** @type {THREE.Texture} The loaded cobblestone texture */
  const cobblestoneTexture = useTexture("cobblestone.jpg");

  // Update texture repeat values
  cobblestoneTexture.wrapS = cobblestoneTexture.wrapT = THREE.RepeatWrapping;
  cobblestoneTexture.repeat.set(10, 10);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      {/* 50x50 units plane for the ground surface */}
      <planeGeometry args={[50, 50]} />
      {/* Standard material with cobblestone texture */}
      <meshStandardMaterial map={cobblestoneTexture} roughness={0.8} />
    </mesh>
  );
};

export default Ground;

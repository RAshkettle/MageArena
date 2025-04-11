import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

const Ground = () => {
  const cobblestoneTexture = useTexture("cobblestone.jpg");

  // Update texture repeat values
  cobblestoneTexture.wrapS = cobblestoneTexture.wrapT = THREE.RepeatWrapping;
  cobblestoneTexture.repeat.set(10, 10);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial map={cobblestoneTexture} roughness={0.8} />
    </mesh>
  );
};

export default Ground;

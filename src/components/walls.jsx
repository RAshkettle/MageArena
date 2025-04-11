/**
 * @module Walls
 * @description Component that renders the wallss with texturing
 */
import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

/**
 * walls component that renders a textured walls around the floor of the game environment
 *
 * @returns {JSX.Element} The wallss mesh component
 */
const Walls = () => {
  /** @type {THREE.Texture} The loaded walls texture */
  const wallsTexture = useTexture("/wall.jpg");

  // Update texture repeat values
  wallsTexture.wrapS = wallsTexture.wrapT = THREE.RepeatWrapping;
  wallsTexture.repeat.set(20, 2);

  // Leva controls for collider visibility
  const { showColliders } = useControls("Physics", {
    showColliders: false,
  });

  return (
    <>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        restitution={0.2}
        friction={1}
        sensor={false}
        position={[25, 1, 0]} // Moved to X=25 and Y=1 (up one unit)
      >
        <mesh>
          {/* Box for the walls surrounding the plane */}
          <boxGeometry args={[0.5, 2, 50]} />
          {/* Standard material with wall texture */}
          <meshStandardMaterial map={wallsTexture} roughness={0.8} />
        </mesh>

        {/* Invisible debug mesh that shows when colliders are visible */}
        {showColliders && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 2, 50]} />
            <meshBasicMaterial color="green" transparent opacity={0.6} />
          </mesh>
        )}
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        restitution={0.2}
        friction={1}
        sensor={false}
        position={[-25, 1, 0]} // Moved to X=25 and Y=1 (up one unit)
      >
        <mesh>
          {/* Box for the walls surrounding the plane */}
          <boxGeometry args={[0.5, 2, 50]} />
          {/* Standard material with wall texture */}
          <meshStandardMaterial map={wallsTexture} roughness={0.8} />
        </mesh>

        {/* Invisible debug mesh that shows when colliders are visible */}
        {showColliders && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 2, 50]} />
            <meshBasicMaterial color="green" transparent opacity={0.6} />
          </mesh>
        )}
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        restitution={0.2}
        friction={1}
        sensor={false}
        rotation={[0, 1.5708, 0]}
        position={[0, 1, 25]} // Moved to X=25 and Y=1 (up one unit)
      >
        <mesh>
          {/* Box for the walls surrounding the plane */}
          <boxGeometry args={[0.5, 2, 50]} />
          {/* Standard material with wall texture */}
          <meshStandardMaterial map={wallsTexture} roughness={0.8} />
        </mesh>

        {/* Invisible debug mesh that shows when colliders are visible */}
        {showColliders && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 2, 50]} />
            <meshBasicMaterial color="green" transparent opacity={0.6} />
          </mesh>
        )}
      </RigidBody>{" "}
      <RigidBody
        type="fixed"
        colliders="cuboid"
        restitution={0.2}
        friction={1}
        sensor={false}
        rotation={[0, 1.5708, 0]}
        position={[0, 1, -25]} // Moved to X=25 and Y=1 (up one unit)
      >
        <mesh>
          {/* Box for the walls surrounding the plane */}
          <boxGeometry args={[0.5, 2, 50]} />
          {/* Standard material with wall texture */}
          <meshStandardMaterial map={wallsTexture} roughness={0.8} />
        </mesh>

        {/* Invisible debug mesh that shows when colliders are visible */}
        {showColliders && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 2, 50]} />
            <meshBasicMaterial color="green" transparent opacity={0.6} />
          </mesh>
        )}
      </RigidBody>
    </>
  );
};

export default Walls;

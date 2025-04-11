/**
 * @module App
 * @description Root application component that sets up the 3D scene
 */
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Game } from "./components/Game";

/**
 * Root App component that sets up the React Three Fiber Canvas and scene environment
 *
 * @returns {JSX.Element} The application root component
 */
function App() {
  return (
    <>
      {/* Main 3D canvas with camera configuration */}
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        {/* Physics world wrapper */}
        <Physics debug={false}>
          {/* Main game scene components */}
          <Game />
        </Physics>

        {/* Camera controls allowing user interaction */}
        <OrbitControls />

        {/* Environment lighting for realistic illumination */}
        <Environment preset="sunset" />
      </Canvas>

      {/* Leva control panel */}
      <Leva />
    </>
  );
}

export default App;

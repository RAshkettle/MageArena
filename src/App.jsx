/**
 * @module App
 * @description Root application component that sets up the 3D scene
 */
import { Environment, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Game } from "./components/Game";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Ecctrl from "ecctrl";
import Player from "./components/Player";

/**
 * Root App component that sets up the React Three Fiber Canvas and scene environment
 *
 * @returns {JSX.Element} The application root component
 */
function App() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];
  return (
    <>
      {/* Main 3D canvas with camera configuration */}
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        <Perf position="top-left" />
        {/* Physics world wrapper */}
        <Physics>
          <Suspense fallback={null}>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl
                capsuleHalfHeight={0.5}
                capsuleRadius={0.3}
                friction={0.2}
                floatHeight={0}
                movementSpeed={4}
                turnSpeed={15}
                sprintSpeed={2.5}
                jumpHeight={6}
                jumpDistance={4}
                gravity={[0, -30, 0]}
                maxStepHeight={0.3}
                camInitialDistance={5}
                camMinDistance={1}
                camMaxDistance={10}
                animated={true}
                autoBalance={true}
                slopeMaxAngle={1}
                characterInitPosition={[0, 3, 0]}
                debug={false}
              >
                {/* Player character with animations */}
                <Player position={[0, -0.8, 0]} />
              </Ecctrl>
            </KeyboardControls>

            {/* Main game scene components */}
            <Game />
          </Suspense>
        </Physics>

        {/* Environment lighting for realistic illumination */}
        <Environment
          preset="night"
          background={true}
          blur={0.5}
          scene={undefined}
        />
      </Canvas>
    </>
  );
}

export default App;

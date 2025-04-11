/**
 * @module App
 * @description Root application component that sets up the 3D scene
 */
import { Environment, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Game } from "./components/Game";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Ecctrl, { EcctrlJoystick } from "ecctrl";
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
        <Physics debug={false}>
          <Suspense fallback={null}>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl>
                {/* Player character with animations */}
                <Player />
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

      {/* Leva control panel with configuration for width and drag capability */}
      <Leva
        titleBar={{ drag: true, filter: true }}
        collapsed={false}
        theme={{
          sizes: {
            rootWidth: "350px",
            controlWidth: "200px",
          },
        }}
      />
    </>
  );
}

export default App;

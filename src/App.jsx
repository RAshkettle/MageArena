import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Game } from "./components/Game";
function App() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        <Game />
        <OrbitControls />
        <Environment preset='sunset' />
      </Canvas>
    </>
  );
}

export default App;

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';


export default function Scene1() {
    return (
        <Canvas style="width:100%; height: 100%; background-color:'black'">
            <Box />
            <OrbitControls />
        </Canvas>
    )
}
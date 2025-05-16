
import React from 'react';
import { Center, Float, useFrame } from '@react-three/drei';
import PulseSphere from './PulseSphere';
import FloatingRings from './FloatingRings';
import GeodeText from './GeodeText';

// Scene component that runs inside Canvas
const PreloaderScene: React.FC = () => {
  const groupRef = React.useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Date.now() * 0.0002;
  });
  
  return (
    <group ref={groupRef}>
      <FloatingRings />
      <PulseSphere position={[0, 0, 0]} scale={1.2} rotationSpeed={0.01} color="#F5A623" />
      <PulseSphere position={[2, 0, 0]} scale={0.6} rotationSpeed={0.015} color="#4A2A6F" />
      <PulseSphere position={[-2, 0, 0]} scale={0.6} rotationSpeed={0.02} color="#4A2A6F" />
      <PulseSphere position={[0, 1.5, 0]} scale={0.6} rotationSpeed={0.018} color="#4A2A6F" />
      <PulseSphere position={[0, -1.5, 0]} scale={0.6} rotationSpeed={0.012} color="#4A2A6F" />
      <Center>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <GeodeText />
        </Float>
      </Center>
    </group>
  );
};

export default PreloaderScene;

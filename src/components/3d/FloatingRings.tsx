
import React from 'react';
import { useFrame } from '@react-three/fiber';

// FloatingRings component that runs inside Canvas
const FloatingRings: React.FC = () => {
  const groupRef = React.useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!groupRef.current) return;
    
    const time = Date.now() * 0.001; // Convert to seconds
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
  });
  
  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5 + i * 0.5, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color={i === 1 ? "#F5A623" : "#4A2A6F"} 
            roughness={0.3}
            metalness={0.8}
            emissive={i === 1 ? "#F5A623" : "#4A2A6F"}
            emissiveIntensity={0.2}
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingRings;

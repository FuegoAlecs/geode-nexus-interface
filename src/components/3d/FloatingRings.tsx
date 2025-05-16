
import React, { useRef } from 'react';
import * as THREE from 'three';

// FloatingRings component that runs inside Canvas
const FloatingRings: React.FC = () => {
  const ringRef = useRef<THREE.Group>(null);
  
  const animate = (self: THREE.Group) => {
    const time = Date.now() * 0.001; // Convert to seconds
    self.rotation.x = Math.sin(time * 0.3) * 0.1;
    self.rotation.y = Math.sin(time * 0.2) * 0.2;
  };
  
  return (
    <group ref={ringRef} onUpdate={animate}>
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

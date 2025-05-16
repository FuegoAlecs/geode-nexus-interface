
import React, { useRef } from 'react';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';

// GeodeText component that runs inside Canvas
const GeodeText: React.FC = () => {
  const textRef = useRef<THREE.Group>(null);
  
  const animate = (self: THREE.Group) => {
    const time = Date.now() * 0.001; // Convert to seconds
    // Gentle floating animation
    self.position.y = Math.sin(time) * 0.1;
  };
  
  return (
    <group ref={textRef} onUpdate={animate}>
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={0.7}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        GEODE
        <meshStandardMaterial 
          color="#F5A623" 
          roughness={0.1}
          metalness={0.8}
          emissive="#F5A623"
          emissiveIntensity={0.4}
        />
      </Text3D>
    </group>
  );
};

export default GeodeText;

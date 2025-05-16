
import React from 'react';
import { Text3D } from '@react-three/drei';

// GeodeText component that runs inside Canvas
const GeodeText: React.FC = () => {
  return (
    <group>
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
        position={[0, Math.sin(Date.now() * 0.001) * 0.1, 0]}
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

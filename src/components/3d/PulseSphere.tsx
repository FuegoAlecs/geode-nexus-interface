
import React from 'react';
import { useFrame } from '@react-three/fiber';

// Define proper types for component props
interface PulseSphereProps {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  color: string;
}

// PulseSphere component that runs inside Canvas
const PulseSphere: React.FC<PulseSphereProps> = ({ position, scale, rotationSpeed, color }) => {
  const sphereRef = React.useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!sphereRef.current) return;
    
    // Update rotation
    sphereRef.current.rotation.y += rotationSpeed;
    sphereRef.current.rotation.z += rotationSpeed * 0.5;
    
    // Pulse effect with sine wave
    const time = Date.now() * 0.001; // Convert to seconds
    const pulse = Math.sin(time * 2) * 0.05 + 1;
    sphereRef.current.scale.set(scale * pulse, scale * pulse, scale * pulse);
  });
  
  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.3}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default PulseSphere;

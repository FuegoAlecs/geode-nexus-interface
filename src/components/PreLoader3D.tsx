
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface GeodeHexagonProps {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  color: string;
}

const GeodeHexagon = ({ position, scale, rotationSpeed, color }: GeodeHexagonProps) => {
  const hexRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (hexRef.current) {
      hexRef.current.rotation.y += rotationSpeed;
      hexRef.current.rotation.z += rotationSpeed * 0.5;
      
      // Pulse effect with sine wave
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 1;
      hexRef.current.scale.set(scale * pulse, scale * pulse, scale * pulse);
    }
  });
  
  return (
    <mesh ref={hexRef} position={position}>
      <cylinderGeometry args={[1, 1, 0.2, 6, 1]} />
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

const GeodeText = () => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      // Gentle floating animation
      textRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1;
    }
  });
  
  return (
    <Center>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text3D
          ref={textRef}
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
      </Float>
    </Center>
  );
};

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.2;
    }
  });
  
  return (
    <group ref={groupRef}>
      <GeodeHexagon position={[0, 0, 0]} scale={1.2} rotationSpeed={0.01} color="#F5A623" />
      <GeodeHexagon position={[2, 0, 0]} scale={0.8} rotationSpeed={0.015} color="#4A2A6F" />
      <GeodeHexagon position={[-2, 0, 0]} scale={0.8} rotationSpeed={0.02} color="#4A2A6F" />
      <GeodeHexagon position={[0, 1.5, 0]} scale={0.8} rotationSpeed={0.018} color="#4A2A6F" />
      <GeodeHexagon position={[0, -1.5, 0]} scale={0.8} rotationSpeed={0.012} color="#4A2A6F" />
      <GeodeText />
    </group>
  );
};

const PreLoader3D = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-geode-purple/90 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-full max-w-3xl max-h-96">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <directionalLight position={[-5, 5, 5]} intensity={1} />
          <Scene />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-geode-orange animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-geode-orange animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-geode-orange animate-pulse delay-200"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader3D;

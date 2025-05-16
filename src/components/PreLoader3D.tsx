
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// PulseSphere component that runs inside Canvas
const PulseSphere = ({ position, scale, rotationSpeed, color }) => {
  const sphereRef = useRef(null);
  
  // useFrame will only run inside the Canvas
  const animate = (state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += rotationSpeed;
      sphereRef.current.rotation.z += rotationSpeed * 0.5;
      
      // Pulse effect with sine wave
      const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.05 + 1;
      sphereRef.current.scale.set(scale * pulse, scale * pulse, scale * pulse);
    }
  };
  
  return (
    <mesh ref={sphereRef} position={position} onUpdate={animate}>
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

// FloatingRings component that runs inside Canvas
const FloatingRings = () => {
  const ringRef = useRef(null);
  
  const animate = (state) => {
    if (ringRef.current) {
      const time = state.clock.getElapsedTime();
      ringRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      ringRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
    }
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

// GeodeText component that runs inside Canvas
const GeodeText = () => {
  const textRef = useRef(null);
  
  const animate = ({ clock }) => {
    if (textRef.current) {
      // Gentle floating animation
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    }
  };
  
  return (
    <Center>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text3D
          ref={textRef}
          onUpdate={animate}
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

// Scene component that runs inside Canvas
const Scene = () => {
  const groupRef = useRef(null);
  
  const animate = ({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  };
  
  return (
    <group ref={groupRef} onUpdate={animate}>
      <FloatingRings />
      <PulseSphere position={[0, 0, 0]} scale={1.2} rotationSpeed={0.01} color="#F5A623" />
      <PulseSphere position={[2, 0, 0]} scale={0.6} rotationSpeed={0.015} color="#4A2A6F" />
      <PulseSphere position={[-2, 0, 0]} scale={0.6} rotationSpeed={0.02} color="#4A2A6F" />
      <PulseSphere position={[0, 1.5, 0]} scale={0.6} rotationSpeed={0.018} color="#4A2A6F" />
      <PulseSphere position={[0, -1.5, 0]} scale={0.6} rotationSpeed={0.012} color="#4A2A6F" />
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
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full"
          animate={{ 
            boxShadow: ["0 0 0 rgba(245, 166, 35, 0)", "0 0 20px rgba(245, 166, 35, 0.7)", "0 0 0 rgba(245, 166, 35, 0)"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 rounded-full bg-geode-orange"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          ))}
          <motion.span 
            className="text-geode-orange text-sm ml-2"
            animate={{ 
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Initializing blockchain...
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PreLoader3D;

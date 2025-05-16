
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface NodeProps {
  position: [number, number, number];
  color: string;
  size: number;
  pulse?: boolean;
  isCenter?: boolean;
}

// Node component that runs inside Canvas
const Node = ({ position, color, size, pulse = false, isCenter = false }: NodeProps) => {
  const nodeRef = useRef<THREE.Mesh>(null);
  
  const animate = ({ clock }) => {
    if (nodeRef.current && pulse) {
      const time = clock.getElapsedTime();
      const scale = size * (1 + Math.sin(time * 2) * 0.1);
      nodeRef.current.scale.set(scale, scale, scale);
    }
  };
  
  return (
    <mesh ref={nodeRef} position={position} onUpdate={animate}>
      {isCenter ? (
        <cylinderGeometry args={[size, size, size * 0.3, 6, 1]} />
      ) : (
        <sphereGeometry args={[size, 16, 16]} />
      )}
      <meshStandardMaterial 
        color={color} 
        roughness={0.3}
        metalness={0.7}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

interface ConnectionProps {
  start: {x: number; y: number; z: number};
  end: {x: number; y: number; z: number};
  color: string;
}

const Connection = ({ start, end, color }: ConnectionProps) => {
  return (
    <line>
      <bufferGeometry>
        <float32BufferAttribute 
          attach="attributes-position" 
          count={2}
          array={new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z])} 
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color={color} linewidth={1} />
    </line>
  );
};

interface NodeData {
  position: [number, number, number];
  delay: number;
}

// NetworkGraph component that runs inside Canvas
const NetworkGraph = () => {
  const graphRef = useRef<THREE.Group>(null);
  
  // Center node and peripheral nodes
  const centerPosition: [number, number, number] = [0, 0, 0];
  const nodes: NodeData[] = [
    { position: [2, 0, 0], delay: 0.1 },
    { position: [1.5, 1.5, 0], delay: 0.2 },
    { position: [0, 2, 0], delay: 0.3 },
    { position: [-1.5, 1.5, 0], delay: 0.4 },
    { position: [-2, 0, 0], delay: 0.5 },
    { position: [-1.5, -1.5, 0], delay: 0.6 },
    { position: [0, -2, 0], delay: 0.7 },
    { position: [1.5, -1.5, 0], delay: 0.8 },
  ];
  
  const animate = ({ clock }) => {
    if (graphRef.current) {
      graphRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  };
  
  return (
    <group ref={graphRef} onUpdate={animate}>
      {/* Center node */}
      <Node 
        position={centerPosition} 
        color="#F5A623" 
        size={0.5} 
        isCenter={true} 
        pulse={true} 
      />
      
      {/* Peripheral nodes */}
      {nodes.map((node, index) => (
        <Float 
          key={index} 
          speed={1} 
          rotationIntensity={0.5} 
          floatIntensity={0.5}
        >
          <Node 
            position={node.position} 
            color="#4A2A6F" 
            size={0.25} 
            pulse={index % 2 === 0}
          />
        </Float>
      ))}
      
      {/* Connections */}
      {nodes.map((node, index) => (
        <Connection 
          key={index}
          start={{ x: centerPosition[0], y: centerPosition[1], z: centerPosition[2] }}
          end={{ x: node.position[0], y: node.position[1], z: node.position[2] }}
          color="#4A2A6F"
        />
      ))}
      
      {/* Connect peripheral nodes to each other */}
      {nodes.map((node, i) => (
        <React.Fragment key={`connections-${i}`}>
          {i < nodes.length - 1 && (
            <Connection 
              start={{ x: node.position[0], y: node.position[1], z: node.position[2] }}
              end={{ 
                x: nodes[i + 1].position[0], 
                y: nodes[i + 1].position[1], 
                z: nodes[i + 1].position[2] 
              }}
              color="#4A2A6F"
            />
          )}
        </React.Fragment>
      ))}
      
      {/* Connect last node to first to complete the circle */}
      <Connection 
        start={{ 
          x: nodes[nodes.length - 1].position[0], 
          y: nodes[nodes.length - 1].position[1], 
          z: nodes[nodes.length - 1].position[2] 
        }}
        end={{ 
          x: nodes[0].position[0], 
          y: nodes[0].position[1], 
          z: nodes[0].position[2] 
        }}
        color="#4A2A6F"
      />
    </group>
  );
};

const DecentralizationVisual = () => {
  return (
    <motion.div 
      className="relative w-[400px] h-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <NetworkGraph />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
};

export default DecentralizationVisual;

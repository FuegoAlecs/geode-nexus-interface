
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import PreloaderScene from './3d/PreloaderScene';
import InitializingIndicator from './3d/InitializingIndicator';

const PreLoader3D: React.FC = () => {
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
          <PreloaderScene />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      <InitializingIndicator />
    </motion.div>
  );
};

export default PreLoader3D;

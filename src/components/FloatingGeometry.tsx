import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#22d3a0"
          emissive="#0d9488"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const FloatingGeometry = () => {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full z-10 pointer-events-none hidden lg:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3a0" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingGeometry;

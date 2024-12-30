import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingBook({ position, rotation }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time) * 0.002;
    meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Book cover */}
        <mesh>
          <boxGeometry args={[2, 3, 0.2]} />
          <meshStandardMaterial color="#88c999" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Pages */}
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[1.9, 2.9, 0.1]} />
          <meshStandardMaterial color="white" metalness={0.1} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

export function FloatingGear({ position, speed = 1 }) {
  const meshRef = useRef();
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 1;
    const teeth = 12;
    
    // Create gear shape
    shape.moveTo(radius, 0);
    for (let i = 0; i < teeth; i++) {
      const angle = (i / teeth) * Math.PI * 2;
      const nextAngle = ((i + 0.5) / teeth) * Math.PI * 2;
      const nextAngle2 = ((i + 1) / teeth) * Math.PI * 2;
      
      shape.lineTo(
        Math.cos(angle) * radius * 1.2,
        Math.sin(angle) * radius * 1.2
      );
      shape.lineTo(
        Math.cos(nextAngle) * radius * 0.8,
        Math.sin(nextAngle) * radius * 0.8
      );
      shape.lineTo(
        Math.cos(nextAngle2) * radius,
        Math.sin(nextAngle2) * radius
      );
    }
    
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3
    });
    
    return geometry;
  }, []);

  useFrame((state) => {
    meshRef.current.rotation.z -= 0.005 * speed;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial
          color="#88c999"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export function FloatingMonitor({ position }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Monitor screen */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Monitor frame */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[3.2, 2.2, 0.2]} />
          <meshStandardMaterial color="#88c999" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -1.2, -0.2]}>
          <cylinderGeometry args={[0.1, 0.3, 1]} />
          <meshStandardMaterial color="#88c999" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Base */}
        <mesh position={[0, -1.7, -0.2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.1]} />
          <meshStandardMaterial color="#88c999" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export function FloatingCode({ position }) {
  const textRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    textRef.current.position.y += Math.sin(time) * 0.002;
    textRef.current.material.opacity = 0.5 + Math.sin(time * 2) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={textRef} position={position}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          {`{ code }`}
          <meshStandardMaterial
            color="#88c999"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </Text3D>
      </mesh>
    </Float>
  );
}

export function FloatingCloud({ position }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.position.x += Math.sin(time * 0.5) * 0.002;
    groupRef.current.position.y += Math.cos(time * 0.5) * 0.002;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#88c999" metalness={0.2} roughness={0.8} />
        </mesh>
        <mesh position={[0.4, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#88c999" metalness={0.2} roughness={0.8} />
        </mesh>
        <mesh position={[-0.4, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#88c999" metalness={0.2} roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#88c999" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
} 
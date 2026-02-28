'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PixelGrid = ({ color = '#3b82f6', pixelSize = 0.15, gap = 0.05 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 40 * 40;
  const tempObject = new THREE.Object3D();

  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (i % 40) * (pixelSize + gap) - (20 * (pixelSize + gap));
      const y = Math.floor(i / 40) * (pixelSize + gap) - (20 * (pixelSize + gap));
      temp.push({ x, y, phase: Math.random() * Math.PI * 2 });
    }
    return temp;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    particles.forEach((p: { x: number; y: number; phase: number }, i: number) => {
      const { x, y, phase } = p;
      const scale = Math.sin(time * 2 + phase) * 0.5 + 0.5;

      tempObject.position.set(x, y, 0);
      tempObject.scale.set(scale, scale, 1);
      tempObject.updateMatrix();
      meshRef.current!.setMatrixAt(i, tempObject.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[pixelSize, pixelSize]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </instancedMesh>
  );
};

export const PixelBlast = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <PixelGrid color="#3b82f6" />
        <PixelGrid color="#d4ff00" pixelSize={0.1} gap={0.1} />
      </Canvas>
    </div>
  );
};

"use client";

import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

function OrbField() {
  const positions = useMemo(
    () => [
      [-2.2, 0.6, 0],
      [1.8, -0.2, -0.7],
      [0.1, 1.1, -1.2],
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.1} />
      {positions.map((position, index) => (
        <Float key={position.join("-")} speed={1 + index * 0.25} rotationIntensity={0.2} floatIntensity={0.45}>
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.72 - index * 0.1, 48, 48]} />
            <MeshTransmissionMaterial
              color={index === 1 ? "#10b981" : "#ffffff"}
              thickness={0.2}
              roughness={0.22}
              transmission={0.82}
              ior={1.3}
              chromaticAberration={0.02}
              backside
            />
          </mesh>
        </Float>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, -0.5]}>
        <ringGeometry args={[1.4, 1.42, 96]} />
        <meshBasicMaterial color={new THREE.Color("#10b981")} transparent opacity={0.22} />
      </mesh>
    </>
  );
}

export function AmbientCanvas() {
  return (
    <div className="absolute inset-0 -z-10 opacity-80" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <OrbField />
      </Canvas>
    </div>
  );
}

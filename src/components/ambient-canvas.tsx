"use client";

import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
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
      <directionalLight position={[3, 4, 5]} intensity={1.6} />
      {positions.map((position, index) => (
        <Float key={position.join("-")} speed={0.8 + index * 0.15} rotationIntensity={0.12} floatIntensity={0.3}>
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.72 - index * 0.1, 24, 24]} />
            <meshStandardMaterial
              color={index === 1 ? "#10b981" : "#f8fafc"}
              metalness={0.35}
              roughness={0.25}
              transparent
              opacity={0.88}
            />
          </mesh>
        </Float>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, -0.5]}>
        <ringGeometry args={[1.4, 1.42, 48]} />
        <meshBasicMaterial color={new THREE.Color("#10b981")} transparent opacity={0.22} />
      </mesh>
    </>
  );
}

export function AmbientCanvas() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const narrowViewport = window.matchMedia("(max-width: 768px)").matches;

    setEnabled(!reducedMotion && !coarsePointer && !narrowViewport);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px 0px" }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled) {
    return (
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.18),transparent_55%)]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div ref={rootRef} className="absolute inset-0 -z-10 opacity-80" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.25]}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <OrbField />
      </Canvas>
    </div>
  );
}

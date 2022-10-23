import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Circle() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#a82e2e"
        attach="material"
        distort={0.8}
        speed={1}
        roughness={0}
      />
    </Sphere>
  );
}
